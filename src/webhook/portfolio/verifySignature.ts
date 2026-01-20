//role: vérifier que GitHub est bien l'expéditeur
//Le webhook contient un header x-hub-signature-256: c'est la signature cryptographique calculée avec 
// - le corp brut de la requete req.rawBody
// - mon code secret contenu dans mon .env

import crypto from "crypto";
import type { Request, Response, NextFunction } from "express";

export default function verifySignature(req: Request, res: Response, next: NextFunction) {
  //Signature envoyé par Git
  const signature = req.headers["x-hub-signature-256"] as string;
  //ma clé dans mon fichier .env
  const secret = process.env.GITHUB_WEBHOOK_SECRET_PORTFOLIO;

  //Je vérifie qu'il y a la signature et le code secret
  if (!signature || !secret) {
    return res.status(401).send("Missing signature");
  }

  //Recalcule de la signature avant de pouvoir comparer
  //Je crée un objet qui va calculer un hmac à partir de l'algoritme SHA-256 et de ma cle secrete
  const hmac = crypto.createHmac("sha256", secret);
  //digest en crypto est le résumé du message, le résultat final du hash
  //on utilise l'objet hmac (l'objet décodeur) sur le contenu de la requete soit req.rawBody et on lui demande de donner un résulat hexadicimale
  // puis on place avant "sha256=" car c'est le header de la requete reçue pour pouvoir récréer le meme format qu'envoyer par github
  const digest = "sha256=" + hmac.update((req as any).rawBody).digest("hex");
  //digest est le code que je calcuke par rapprt à mon code secret

  //ensuite de compare l'entete reçu dans la requete à ce que j'ai calculé à partir de mon code secret, si c'est la meme chose 
  // j'accepte, sinon je refuse
  const valid = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );

  if (!valid) {
    return res.status(401).send("Invalid signature");
  }

  next();
}
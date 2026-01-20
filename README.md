🚀 API – Webhooks GitHub & Automatisation de Déploiement
Projet réalisé dans le cadre de mon apprentissage du CI/CD
Cette API centralise plusieurs services internes (FEP, MyPizza…) et gère des webhooks GitHub sécurisés permettant le déploiement automatique de projets hébergés sur mon serveur.
Elle est développée en TypeScript, utilise Express, et s’intègre avec Docker pour reconstruire et redémarrer automatiquement les conteneurs lors d’un push GitHub.
Ce projet s’inscrit dans ma démarche d’apprentissage du CI/CD, avec une première étape centrée sur le CD (Continuous Deployment).
La partie CI (tests, linting, pipelines GitHub Actions) viendra dans un second temps.

✨ Fonctionnalités principales
🔧 API REST (FEP, MyPizza, etc.)
L’API expose plusieurs routes permettant de récupérer des données stockées dans des fichiers JSON internes.
Chaque route renvoie directement le contenu du fichier correspondant, ce qui permet :

- de centraliser des données statiques ou semi‑dynamiques
- de fournir une API simple pour des projets front
- de séparer proprement données et interface
  Ces routes sont organisées dans src/routes/ et peuvent être étendues facilement.

🔐 Webhooks GitHub sécurisés

- Vérification HMAC SHA‑256 via x-hub-signature-256
- Secret stocké uniquement dans .env sur le serveur
- Rejet automatique des requêtes non signées ou invalides

🚀 Déploiement automatique (CD)
Lors d’un push GitHub sur le projet Portfolio :

- récupération du code (git pull)
- reconstruction de l’image Docker
- arrêt et suppression de l’ancien conteneur
- lancement du nouveau conteneur mis à jour
  Le tout déclenché automatiquement via /webhook/portfolio.

🧱 Architecture modulaire du projet
L'architecture est pensée pour etre claire et évolutive avec la possibilité d'ajouter facilement de nouvelles routes et webhooks.
src/
index.ts → Point d’entrée de l’API
routes/
fep/
mypizza/
webhook/
index.ts → Routeur global des webhooks
portfolio/
verifySignature.ts → Vérification HMAC GitHub
deploy.ts → Script de déploiement Docker
index.ts → Route POST /webhook/portfolio

🔐 Sécurité
✔ Vérification de signature GitHub
Chaque webhook est validé via :

- le header x-hub-signature-256
- un secret stocké dans .env (non versionné)
- un recalcul HMAC SHA‑256 du body brut (req.rawBody)
  Si la signature ne correspond pas, la requête est rejetée.
  ✔ Secrets non versionnés
  Le fichier .env n’est jamais présent dans le repo.
  Il est créé uniquement sur le serveur.
  Exemple de variable :
  GITHUB_WEBHOOK_SECRET_PORTFOLIO=xxxxxxxxxxxx

🐳 Déploiement automatique (Portfolio)
Lorsqu’un push GitHub est reçu :

- Le webhook appelle /webhook/portfolio
- La signature est vérifiée
- Le script deploy.ts exécute :
  cd /srv/portfolio
  git pull
  docker build -t portfolio:latest .
  docker stop portfolio-christelle || true
  docker rm portfolio-christelle || true
  docker run -d --name portfolio-christelle -p 3001:3000 portfolio:latest

Le conteneur est donc reconstruit et relancé automatiquement.

🧪 CI/CD – Démarche d’apprentissage
Ce projet constitue ma première étape vers une chaîne CI/CD complète.
✔ Partie déjà en place : CD (Continuous Deployment)

- Déploiement automatisé via webhook GitHub
- Reconstruction et redémarrage Docker
- Pipeline simple, robuste et reproductible
  ❌ Partie à venir : CI (Continuous Integration)
- Tests automatiques
- Linting TypeScript
- Build de validation
- Pipeline GitHub Actions
  L’objectif est d’évoluer progressivement vers un pipeline CI/CD complet.

⚙️ Installation & développement

1. Installer les dépendances
   npm install
2. Lancer en mode développement
   npm run dev
3. Compiler TypeScript
   npm run build
4. Lancer la version compilée
   npm start

🔌 Configuration du serveur Express
Pour permettre la vérification HMAC GitHub, Express doit capturer le raw body :
app.use(express.json({
verify: (req: any, res, buf) => {
req.rawBody = buf;
}
}));

👩‍💻 Auteur
Développé par Christelle Charpinet
Hybrid Project Manager & Web Developer
En apprentissage actif des pratiques CI/CD, de l’automatisation et des architectures scalables.

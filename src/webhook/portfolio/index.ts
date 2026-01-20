import { Router } from "express";
import verifySignature from "./verifySignature.js";
import deploy from "./deploy.js";

const router = Router();

//C'est la route qui donne l'ordre des actions
router.post("/", verifySignature, async (req, res) => {
  try {
    await deploy();
    res.status(200).send("OK");
  } catch (err) {
    console.error(err);
    console.error("Deploy error:", err);
    res.status(500).send("Deploy failed");
  }
});

export default router;
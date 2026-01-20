import { Router } from "express";
import taille from "../../data/mypizza/taille.json";

const router = Router();

router.get("/", (req, res) => {
  res.json(taille);
});

export default router;
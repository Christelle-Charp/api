import { Router } from "express";
import prix from "../../data/mypizza/prix.json" assert { type: "json" };

const router = Router();

router.get("/", (req, res) => {
  res.json(prix);
});

export default router;
import { Router } from "express";
import prix from "../../data/mypizza/prix.json";

const router = Router();

router.get("/", (req, res) => {
  res.json(prix);
});

export default router;
import { Router } from "express";
import pate from "../../data/mypizza/pate.json" assert { type: "json" };

const router = Router();

router.get("/", (req, res) => {
  res.json(pate);
});

export default router;
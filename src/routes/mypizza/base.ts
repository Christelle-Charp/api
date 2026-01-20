import { Router } from "express";
import base from "../../data/mypizza/base.json";

const router = Router();

router.get("/", (req, res) => {
  res.json(base);
});

export default router;
import { Router } from "express";
import catalogue from "../../data/fep/catalogue.json" assert { type: "json" };

const router = Router();

router.get("/", (req, res) => {
  res.json(catalogue);
});

export default router;
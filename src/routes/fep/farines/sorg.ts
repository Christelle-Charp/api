import { Router } from "express";
import data from "../../../data/fep/farines/FEP-SORG.json";

const router = Router();

router.get("/", (req, res) => {
  res.json(data);
});

export default router;
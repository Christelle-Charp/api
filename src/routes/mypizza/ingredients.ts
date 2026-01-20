import { Router } from "express";
import ingredients from "../../data/mypizza/ingredients.json";

const router = Router();

router.get("/", (req, res) => {
  res.json(ingredients);
});

export default router;
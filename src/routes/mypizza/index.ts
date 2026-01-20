import { Router } from "express";
import baseRoutes from "./base.js";
import ingredientsRoutes from "./ingredients.js";
import pateRoutes from "./pate.js";
import prixRoutes from "./prix.js";
import tailleRoutes from "./taille.js";

const router = Router();

router.use("/base", baseRoutes);
router.use("/ingredients", ingredientsRoutes);
router.use("/pate", pateRoutes);
router.use("/prix", prixRoutes);
router.use("/taille", tailleRoutes);

export default router;
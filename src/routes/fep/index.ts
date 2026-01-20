import { Router } from "express";
import catalogueRoutes from "./catalogue.js";
import farinesRoutes from "./farines/index.js";

const router = Router();

router.use("/catalogue", catalogueRoutes);
router.use("/farines", farinesRoutes);

export default router;
import { Router } from "express";
import portfolioWebhook from "./portfolio/index.js";

const router = Router();

router.use("/portfolio", portfolioWebhook);

export default router;
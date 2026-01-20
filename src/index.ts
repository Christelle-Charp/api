import express from "express";
import fepRoutes from "./routes/fep/index.js";
import mypizzaRoutes from "./routes/mypizza/index.js";
import webhookRouter from "./webhook/index.js";


const app = express();
//Il faut récupérer le body brut dans le req.rawBody avant de transformer en json sinon impossible de faire la verif pour les webhooks Git
app.use(express.json({
  verify: (req: any, res, buf) => {
    req.rawBody = buf;
  }
}));

app.use("/fep", fepRoutes);
app.use("/mypizza", mypizzaRoutes);
app.use("/webhook", webhookRouter);


app.get("/", (req, res) => {
  res.json({ message: "API en ligne" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
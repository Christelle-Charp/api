import { Router } from "express";
import cact from "./cact.js";
import cara from "./cara.js";
import chata from "./chata.js";
import coco from "./coco.js";
import lent from "./lent.js";
import spok from "./spok.js";
import maiz from "./maiz.js";
import pois from "./pois.js";
import poti from "./poti.js";
import quin from "./quin.js";
import rizb from "./rizb.js";
import rizc from "./rizc.js";
import noir from "./noir.js";
import sorg from "./sorg.js";
import aman from "./aman.js";
import havr from "./havr.js";
import orge from "./orge.js";
import colr from "./colr.js";
import nutl from "./nutl.js";

const router = Router();

router.use("/FEP-CACT", cact);
router.use("/FEP-CARA", cara);
router.use("/FEP-CHATA", chata);
router.use("/FEP-COCO", coco);
router.use("/FEP-LENT", lent);
router.use("/FEP-SPOK", spok);
router.use("/FEP-MAIZ", maiz);
router.use("/FEP-POIS", pois);
router.use("/FEP-POTI", poti);
router.use("/FEP-QUIN", quin);
router.use("/FEP-RIZB", rizb);
router.use("/FEP-RIZC", rizc);
router.use("/FEP-NOIR", noir);
router.use("/FEP-SORG", sorg);
router.use("/FEP-AMAN", aman);
router.use("/FEP-HAVR", havr);
router.use("/FEP-ORGE", orge);
router.use("/FEP-COLR", colr);
router.use("/FEP-NUTL", nutl);


export default router;
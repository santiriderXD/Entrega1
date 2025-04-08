import { Router } from "express";
import ProductManager from "../manager/Product.manager.js";

const router = Router();

router.get("/products", async (req, res) => {});
router.post("/products", async (req, res) => {});
router.get("/products/:pid", async (req, res) => {});
router.put("/products/:pid", async (req, res) => {});
router.delete("/products/:pid", async (req, res) => {});

export default router;

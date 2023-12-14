import {Router} from "express";
import {ProductManager} from "../classes/ProductManager.js";

const router = Router();

const productManager = new ProductManager ("productos.json");

router.get("/", async (req, res) => {
    const {limit} = req.query;
    try {
    let temporalProducts = await productManager.getProducts();    

    if (limit) {
            let temporalArray  = temporalProducts.filter((index) => index < limit)

            res.json({
            data: temporalArray,
            limit: limit,
            cant: temporalArray.length,})
        } else {
            res.json({
                data: temporalProducts,
                limit: false,
                cant: temporalProducts.length,})
        } 
    } catch (error){console.log("error app.get", error)}} )

router.get("/:pid", async (req, res) => {
    const {pid} = req.params;

    let product = await productManager.getProductById(parseInt(pid));

    if (product) {
        res.json({ message: "success", data: product });
        } else {
        res.json({
            message: "el producto solicitado no existe",
        });
        }
    });

router.post("/", (req, res) => {
    res.send("Hola Mundo");
})

router.put("/", (req, res) => {
    res.send("Hola Mundo");
})

router.delete("/", (req, res) => {
    res.send("Hola Mundo");
})


export default router;
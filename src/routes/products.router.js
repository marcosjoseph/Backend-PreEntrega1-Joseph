import {Router} from "express";
import {ProductManager} from "../classes/ProductManager.js";

const router = Router();

const productManager = new ProductManager ("productos.json");

router.get("/", async (req, res) => {
    const {limit} = req.query;
    try {
    let temporalProducts = await productManager.getProducts();    

    if (limit) {
            let temporalArray  = temporalProducts.slice(0, +limit)

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
    const {nombre, descripcion, img, precio, stock, code} = req.body;

    try {
        const data = productManager.addProduct(nombre, descripcion, img, precio, stock, code);
        res.json({message: success, data: data})
    } catch (error) {
        console.error("No se hay podido agregar el producto", error)
        res.status(500).json({message: "error", data: error})}
})

router.put("/:pid", (req, res) => {
    res.send("Hola Mundo");
})

router.delete("/", (req, res) => {
    res.send("Hola Mundo");
})


export default router;
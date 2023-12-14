import express from "express";
import routerProducts from "./routes/products.router.js";

const app = express();
const PORT = 8082;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("Bienvenidos")
});

app.use("/api/products", routerProducts);


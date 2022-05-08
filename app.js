const express = require("express");
const app = express();
const path = require("path")

app.listen(3000, () => {
    console.log("El servidor 3000 esta funcionando")
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/home.html"))
})


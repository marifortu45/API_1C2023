require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./src/db/config');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
dbConnection();
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "You are connected to the project" });
});

app.use("/api/usuarios", require("./src/routes/usuarios.routes"));
app.use("/api/mensajes", require("./src/routes/mensajes.routes"));

app.listen(process.env.PORT, () =>{
    console.log('App listening on PORT: '+process.env.PORT);
})

module.exports = app;

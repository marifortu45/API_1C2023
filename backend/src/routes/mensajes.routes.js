const { Router } = require("express");
const mensajesController = require("../controllers/mensajes.controller");
const jwtValidator = require('../middlewares/jwtValidator');
const checkFields = require("../middlewares/validateFields");
const { check } = require("express-validator");

const router = Router();

router.get("/",jwtValidator,mensajesController.getMensajes); //GET MENSAJES

router.post(
  "/",
  [
    check("name_lastname").not().isEmpty(),
    check("email").not().isEmpty(),
    check("phone").not().isEmpty(),
    check("comment").not().isEmpty(),
    checkFields,
  ],
  mensajesController.createMensaje
); //POST MENSAJE

module.exports = router;

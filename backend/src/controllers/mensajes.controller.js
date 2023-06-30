let instance = null;
require('dotenv').config();
const jwt = require("jsonwebtoken");
const MensajesService = require("../services/mensajes.service");
const AuthService = require('../services/auth.service');

class MensajesController {

  static getInstance() {
    if (!instance) {
      return new MensajesController();
    }
    return instance;
  }

  async getMensajes(req, res) {
    try {
      const mensajes = await MensajesService.getMessages();
      return res.status(200).json(mensajes);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getMensajes",
        message: err,
      });
    }
  }

  async createMensaje(req, res) {
    try {
      let newMensaje = await MensajesService.createMessage(req.body);

      return res.status(201).json({
        message: "Created!",
        mensaje: newMensaje,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createMensaje",
        message: err.message,
      });
    }
  }

}

module.exports = MensajesController.getInstance();

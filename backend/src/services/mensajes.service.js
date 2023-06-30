const MensajesModel = require('../models/Mensajes');
const bcrypt = require('bcrypt');

class MensajesService{

    async getMessages() {
        try {
          const mensajes = await MensajesModel.find();
          return mensajes;
        } catch (err) {
          console.error(err);
          throw new Error("Error in getMensajes Service");
        }
      }

      async createMessage(mensaje) {
        try {
          await MensajesModel.create(mensaje);
          return mensaje;
        } catch (err) {
          console.error(err);
          throw new Error("Error in createMensaje Service");
        }
      }
}

module.exports = new MensajesService();
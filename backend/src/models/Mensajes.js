const mongoose = require('mongoose');
const { Schema } = mongoose;

const MensajesSchema = new mongoose.Schema({
    name_lastname:String,
    email:String,
    phone:String,
    comment:String
});

const Mensajes = mongoose.model('Mensajes',MensajesSchema);

module.exports = Mensajes;
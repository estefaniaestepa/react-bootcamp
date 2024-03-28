const mongoose = require("mongoose");

const personajeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  faction: {
    type: String,
    required: true,
    trim: true,
  },
  profession: {
    type: String,
    required: true,
    trim: true,
  },
  race: {
    type: String,
    required: true,
    trim: true,
  },
});

const Personaje = mongoose.model("Personaje", personajeSchema);

module.exports = Personaje;

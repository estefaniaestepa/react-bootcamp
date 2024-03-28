const Personaje = require("./personaje.model");

const create = async (req, res, next) => {
  try {
    const personaje = new Personaje(req.body);
    personaje.save();
    res.status(200).json({
      status: 200,
      message: "created",
      data: personaje,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const personaje = await Personaje.find();
    res.status(200).json({
      status: 200,
      message: "ok",
      data: personaje,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};

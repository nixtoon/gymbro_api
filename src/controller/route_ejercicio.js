const Ejercicio = require('../models/model_ejercicio');

// agregar usuario
const addEjercicio = async (req, res) => {

  const { nombre, series, repeticiones, kilogramos, imagen } = req.body;

  try {

    const ejercicio = new Ejercicio({ nombre, series, repeticiones, kilogramos, imagen });

    const savedEjercicio = await ejercicio.save();

    res.json({
      status: 200,
      mensaje: "Ejercicio guardado exitosamente",
      savedEjercicio,
    });

  }catch(err) {

    console.error(err.stack);
    res.status(500).json({
      status: 500,
      mensaje: "Error al guardar ejercicio",
      err: err.message,
    });

  }
};

// Listar ejercicio
const listarEjercicios =  async (req, res) => {
  try {

    const model = await Ejercicio.find();
    const total = await Ejercicio.countDocuments({});

    res.json({ 
      status: 200, 
      total, 
      model 
    });

    console.log(model);

  } catch (err) {
    
    res.json({
      status: 400,
      mensaje: "Error al leer el archivo",
      err,
    });

  };
}; 

module.exports = {
  addEjercicio,
  listarEjercicios
}
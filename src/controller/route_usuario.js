const Usuario = require("../models/model_usuario");


// agregar usuario
const addUsuario = async (req, res) => {

  const { nombre, user, password, correo } = req.body;

  try {

    const usuario = new Usuario({ nombre, user, password, correo });

    const savedUsuario = await usuario.save();

    res.json({
      status: 200,
      mensaje: "Usuario guardado exitosamente",
      savedUsuario,
    });

  }catch(err) {
    console.error(err.stack);
    res.status(500).json({
      status: 500,
      mensaje: "Error al guardar el usuario",
      err: err.message,
    });
  }
};

// Listar usuarios
const listarUsuarios =  async (req, res) => {
  try {

    const model = await Usuario.find();
    const total = await Usuario.countDocuments({});

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

// login
const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    if (!user || !password) {
      return res.status(400).json({ status: 400, mensaje: "Nombre de usuario y contraseña son requeridos." });
    }

    // Realiza la búsqueda en la base de datos por nombre de usuario y contraseña
    const usuario = await Usuario.findOne({ user, password });

    if (!usuario) {
      return res.status(404).json({ status: 404, mensaje: "Usuario no encontrado." });
    }

    res.json({
      status: 200,
      usuario: {
        _id: usuario.id,
        nombre: usuario.nombre,
        user: usuario.user,
        correo: usuario.correo
      }
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      mensaje: "Error al buscar el usuario",
      err
    });
    
  }
};

module.exports = {
  addUsuario,
  listarUsuarios,
  login
}
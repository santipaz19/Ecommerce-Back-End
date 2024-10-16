const User = require('../models/userModel'); // Importa el modelo de Usuario

// Función para el login de un usuario
exports.userLogin = async (req, res) => {
    const { email, password } = req.body; // Obtén el email y la contraseña desde el body de la solicitud

    try {
        // Buscar el usuario por email
        const user = await User.findOne({ where: { email } });

        // Verificar si el usuario existe
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña coincide (comparación directa)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Si el usuario y la contraseña son correctos
        res.status(200).json({
            message: 'Login exitoso',
            userId: user.id,
            email: user.email,
            isAuthenticated: true
        });

    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
};

const User = require('../models/userModel');

const users = [{ email: 'prueba@gmail.com', password: 'hola123' }]


const seedUser = async () => {
    try {
        await User.bulkCreate(users);
        console.log('Productos seed creados exitosamente');
    } catch (error) {
        console.error('Error al crear productos seed:', error);
    }
};

module.exports = seedUser;
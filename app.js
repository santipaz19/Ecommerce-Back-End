const express = require('express');
const productRoutes = require('./routes/productRoutes'); // Ruta de productos
const userRoutes = require('./routes/userRoutes'); // Ruta de productos
const sequelize = require('.'); // Conexión con la base de datos
const seedProducts = require('./seeders/ProductSeed');
const cors = require('cors');
const seedUser = require('./seeders/UserSeed');

// Crear una instancia de la aplicación Express
const app = express();

app.use(cors());

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Usar las rutas de productos
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);

// Conectar a la base de datos y luego iniciar el servidor
sequelize.sync({ force: true }).then(() => {
    seedProducts();
    seedUser();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}).catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
});

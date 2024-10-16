# E-Commerce Backend

Este proyecto es la API para la aplicación Mi tienda E-Commerce. A continuación, se detallan las instrucciones para configurar y ejecutar el proyecto localmente.

## Tecnologias
Utilicé Node.js como entorno de ejecución para la aplicación, SQLite como base de datos ligera y Express.js para la creación de la API y el manejo de rutas.

## Descripción de la Aplicación

La API permite:

- **Gestionar Productos**: Permite obtener todos los Productos, buscar uno específico por su ID, modificar uno ya existente o crear uno nuevo.
- **Cargar Datos**: Permite la carga inicial de datos de productos y usuarios desde archivos para facilitar la configuración inicial.

  
## Descripción de la Aplicación

EndPoints:

- /api/products POST para crear un producto
- /api/products GET para obtener todos los productos
- /api/products/:id GET para obtener un producto especifico
- /api/products DELETE para eliminar un producto
- /api/products/:id PUT para actualizar un producto
- /api/user POST para logear usuario

# Deploy:
https://ecommers-back-end.onrender.com

En caso de utilizar el deploy, espera unos minutos a que se levante el servidor debido a que está alojado en render y en el plan gratis al estar inactivo se apaga.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/santipaz19/Ecommerce-Back-End.git

2. **Instalar dependencias: Usando npm:**

   npm install

## Ejecucion

Para iniciar el proyecto en modo desarrollo:
npm start

El proyecto se ejecutará en http://localhost:3001. 

## Estructura del Proyecto

src/: Contiene el código fuente del proyecto.

controllers/: Contiene la lógica de los controlladores.

models/: Definicion de modelos.

routes/: Módulos que los endpoints.

seeders/:  Para la carga inicial de datos en la base de datos.

app.js: Servidor

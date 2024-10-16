# E-Commerce Backend

Este proyecto es la API para la aplicación Mi tienda E-Commerce. A continuación, se detallan las instrucciones para configurar y ejecutar el proyecto localmente.

## Descripción de la Aplicación

La API permite:

- **Gestionar Productos**: Permite obtener todos los Productos, buscar uno específico por su ID, modificar uno ya existente o crear uno nuevo.
- **Simular Batallas**: Proporciona la lógica necesaria para realizar batallas, así como la capacidad de guardar y obtener información sobre todas las batallas o filtrarlas por ID de batalla o por Pokémon.
- **Cargar Datos**: Permite la carga inicial de datos de Pokémon desde archivos para facilitar la configuración inicial.

  
## Descripción de la Aplicación

EndPoints:

- /api/products POST
- /api/products GET
- /api/products/:id GET
- /api/products DELETE
- /api/products/:id PUT
- /api/user POST

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

# API Bet Products!

Este proyecto es un API (CRUD) basado en NodeJS con el framework de backend ExpressJS junto con una base de datos MongoDB para una prueba tecnica de la empresa **La Fortuna S.A**.

# Requisitos principales
Se necesitará tener instalado en el sistema operativo:
 - [NodeJS](https://nodejs.org/en/download)
 - [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
 - [Mongo Community Server](https://www.mongodb.com/try/download/community)
 - [Mongo Compass](https://www.mongodb.com/products/tools/compass)
 
# Postman 

[**Documentacion**](https://documenter.getpostman.com/view/14774609/2s9YeHbBRo)

# Instrucciones de configuración e instalación
- #### Clonar este repositorio. 

- #### Configurar variables de entorno:

    `SERVER_PORT=` : Especificar el puerto para el servidor de Express.

    `MONGODB_URI=`: Especificar el URI de conexion del Cluster personal de MongoDB o dejar vacío para conexion local.

    Template URI Cluster MongoDB:
    
    `mongodb+srv://<username>:<password>@<cluster-name>.cnncote.mongodb.net/`
   
    Ejemplo URI Cluster MongoDB:
  
    `MONGODB_URI=mongodb+srv://juanvillota:123455>@myclustername.cnncote.mongodb.net/apuestasDB`

- #### Instalación:

    `npm install`

- #### Iniciar servidor:

    `npm start`

- #### Abrir Mongo Compass:

    Especificar en la caja de conexion la misma URI de la variable de entorno de MONGODB o para conexion local usar: 

    `mongodb://localhost:27017`

- #### Click en Conectar y Listo!


# Notas

Endpoint `/api/v1/productos`

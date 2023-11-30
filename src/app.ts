
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const { xss } = require('express-xss-sanitizer');
const helmet = require( "helmet");
const { conectionDB } = require('./database/config');

// Server Config
const port = process.env.SERVER_PORT;
const app = express();

// Connection to Database
(async function connect() {
    try {
        await conectionDB();
    } catch (error) {
        console.log(error);
    }
})(); // IIFE (Immediately Invoked Function Expression


// Middleware
app.use(cors()); // CORS
app.use(mongoSanitize()); //Prevent SQL injection
app.use(helmet()); // Helmet for security headers
app.use(xss()); // Prevent XSS attacks
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.json()); //Parse JSON bodies
app.use(express.static("public")); // Serve static files


// Routes
app.use('/api/v1/productos', require('./v1/routes/products'));


// Server Listening
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

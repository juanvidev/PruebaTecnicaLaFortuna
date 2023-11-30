const mongoose = require('mongoose');

const conectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/apuestasDB',);

        console.log("Database successfully connected!")

    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database. ');
    }
}

module.exports = {
    conectionDB
}
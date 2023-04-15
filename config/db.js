const mongoose = require("mongoose");
const database = () => {
    try {
        mongoose.connect(process.env.DB)
        .then((res) => console.log(`db is connected to ${res.connection.host}`))
    } catch (error) {
        console.log(error);
    }
}
module.exports  = database
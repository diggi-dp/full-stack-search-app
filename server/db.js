const mongoose = require('mongoose')

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongo connection  success')
    } catch (error) {
        console.log("mongo connection failed")
    }
}


module.exports = connectMongoDB
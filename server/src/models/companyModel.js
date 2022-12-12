const mongoose = require('mongoose')

const companiesSchema = new mongoose.Schema({
    _id: { type: Number },
    name: { type: String },
    url: { type: String }
})

module.exports = new mongoose.model('Companies', companiesSchema);
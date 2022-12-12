const mongoose = require('mongoose')


const adsSchema = new mongoose.Schema({
    _id: { type: Number },
    companyId: { type: Number },
    primaryText: { type: String },
    headline: { type: String },
    description: { type: String },
    CTA: { type: String },
    imageUrl: { type: String },
})



module.exports = new mongoose.model('Ads', adsSchema);








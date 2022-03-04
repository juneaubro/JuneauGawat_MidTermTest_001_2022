const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vaccine = new Schema(
    {
        cardNumber: { type: String},
        vaccineSite: { type: String},
        priorityArea: { type: String,enum: ['80+', 'healthcare', 'essential']},
        dateTime:{type:Date},
        cancelled:{type: Boolean}
    },
    { timestamps: true },
)

module.exports = mongoose.model('vaccines', Vaccine)

//Entry data object
const mongoose = require("mongoose")
const entrySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: true,
        default: new Date()
    }
})

//Registering so Mongoose sees it.
const Entry = mongoose.model("Entry", entrySchema)
module.exports = Entry

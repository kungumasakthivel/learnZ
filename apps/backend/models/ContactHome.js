const mongoose = require('mongoose');

const ContactHomeSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
}, {
    versionKey: false
});

const ContactHomeModel = mongoose.model("contact", ContactHomeSchema);

module.exports = {ContactHomeModel};
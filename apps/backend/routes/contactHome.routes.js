const express = require('express');
const { ContactHomeModel } = require('../models/ContactHome');
const { sendEmailTo } = require('../assets/autoreply');
const contactRoute = express.Router();


contactRoute.post('/contact', async(req, res) => {
    const {name, email, message} = req.body;

    try {
        let data = new ContactHomeModel({name, email, message});
        await data.save();

        res.send({
            message: 'success',
            status: 1
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }

    sendEmailTo(email, name.toUpperCase());

})


module.exports = {contactRoute};

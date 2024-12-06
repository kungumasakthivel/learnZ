const express = require('express');
const { ContactHomeModel } = require('../models/ContactHome');
const { sendEmailTo } = require('../assets/autoreply');
const consoleRoutes = express.Router();

consoleRoutes.get('/enquires', async (req, res) => {
    try {
        let cursor = ContactHomeModel.find();
        console.log(cursor);
        const en_data = await cursor;
        let data = en_data.map(each =>{ 
            return{
                name: each.name,
                email: each.email,
                message: each.message
            }
        })
        console.log(data);
        // return;
        return res.status(200).json({
            data
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = {
    consoleRoutes
};
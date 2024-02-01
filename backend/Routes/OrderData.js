const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post('/orderData', async (req, res) => {
    const { order_data, email, order_date } = req.body;

    // Create a new order object
    const newOrder = {
        email: email,
        order_data: {
            order_date: order_date,
            items: order_data
        }
    };

    try {
        let existingOrder = await Order.findOne({ email: email });

        if (existingOrder === null) {
            // If email doesn't exist in DB, create a new order
            await Order.create(newOrder);
        } else {
            // If email exists, update the existing order
            await Order.findOneAndUpdate({ email: email }, { $push: { order_data: newOrder.order_data } });
        }

        res.json({ success: true });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});
router.post('/myOrderData',async(req,res)=>{
    try{
        let myData=await Order.findOne({'email':req.body.email})
        res.json({orderData:myData});
    }
    catch{
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

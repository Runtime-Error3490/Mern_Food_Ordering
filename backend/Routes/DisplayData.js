const express = require('express');
const app = express();
const router = express.Router();
router.post('/foodData', (req, res) => {
    try{
        res.send([global.food_items,global.category ]);
    }
    catch(err){     
        console.error(err);
        res.send(err);
    }   
});
module.exports = router;
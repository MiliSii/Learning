var express = require('express'); //importing the express JS module into our aplication
var router=express.Router();


router.get('/', function (req, res) {
    res.send("GetRequest for order!");
}); /* /routes/order */

router.get('/get-order-details', function (req, res) {
    res.send("GetRequest for orders  details!");
}); /* /routes/product/get-order-details */


module.exports=router;
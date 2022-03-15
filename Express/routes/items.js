var express = require('express'); //importing the express JS module into our aplication
var router=express.Router();


router.get('/', function (req, res) {
    res.send("GetRequest for items!");
}); /* /routes/product */

router.get('/get-items-details', function (req, res) {
    res.send("GetRequest for items  details!");
}); /* /routes/product/get-items-details */


module.exports=router;
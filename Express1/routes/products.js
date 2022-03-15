var express = require('express'); //importing the express JS module into our aplication
var router=express.Router();


router.get('/', function (req, res) {
    res.send("GetRequest for product!");
}); /* /routes/product */

router.get('/get-products-details', function (req, res) {
    res.send("GetRequest for products  details!");
}); /* /routes/product/get-products-details */


router.post('/create-products', function (req, res) {
    res.send("List of users");
});
router.put('/update-products', function (req, res) {
    res.send("List of users");
});
router.get('/read-all-products', function (req, res) {
    res.send("List of users");
});

router.get("/get-product-details", (req, res) => {

    var productObj = {
        productId: 10,
        productName: "Express",
        active: true

    }
    res.send(productObj);

});

router.delete('/delete-products', function (req, res) {
    res.send("List of users");
});

module.exports=router;
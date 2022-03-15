var express = require('express'); //importing the express JS module into our aplication
var app = express();// initializing the app using express
var products=require('/routes/products');
var items=require('/routes/items');
var users=require('/routes/users');
var order=require('/routes/order');

//using the app we are configuring the route of "GET" method and path is "/getUsers"
//whenever request for this endpoint /getUsers -> Hello! (this response will be given on)

app.use("/products",products);
app.use("/order",order);
app.use("/items",items);
app.use("/users",users);


/*
app.get("/getTraining", (req, res) => {

    var trainingObj = {
        trainingId: 10,
        trainingName: "Express",
        active: true

    }
    res.send(trainingObj);

});
*/

app.listen(4000);
//we are starting the app at port number 4000
// Node -> http.createServer
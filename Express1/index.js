var express = require('express'); //importing the express JS module into our aplication
var app = express();// initializing the app using express


//using the app we are configuring the route of "GET" method and path is "/getUsers"
//whenever request for this endpoint /getUsers -> Hello! (this response will be given on)

app.get('/getUsers', function (req, res) {
    res.send("Hello!");
});

/*
    Methods:
     GET
     POST
     PUT
     PATCH
     DELETE

      app.get("/getUsers",(req, res)=>{

        //req is request captured as input 
        //res is response as output

          res.send("Hello!"); 
      });

     /getUsers- it is based on you app
*/

app.get("/getTraining",  (req, res) => {

    var trainingObj = {
        trainingId:10,
        trainingName:"Express",
        active:true

    }
    res.send(trainingObj);

});

app.listen(4000);
//we are starting the app at port number 4000
// Node -> http.createServer
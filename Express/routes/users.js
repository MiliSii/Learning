var express = require('express'); //importing the express JS module into our aplication
var router=express.Router();


router.get('/', function (req, res) {
    res.send("GetRequest for users!");
}); /* /routes/users */

router.get('/get-users-details/:id', function (req, res) {
    res.send("GetRequest for user  details!" + req.params.id);
}); /* /routes/users/get-users-details */

router.get('/search-by-location/:state/:city', function (req, res) {
    res.send("GetRequest for user adress details!" + req.params.state + req.params.city);
}); /* /routes/users/get-users-details */


router.get('/getUsers', function (req, res) {
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


router.post('/create-users', function (req, res) {
    res.send("List of users");
});
router.put('/update-users', function (req, res) {
    res.send("List of users");
});
router.get('/read-all-users', function (req, res) {
    res.send("List of users");
});

router.get("/get-users-details", (req, res) => {

    var userObj = {
        userId: 10,
        Name: "Mill",
        status: true

    }
    res.send(userObj);

});

router.delete('/delete-users', function (req, res) {
    res.send("List of users");
});


module.exports=router;
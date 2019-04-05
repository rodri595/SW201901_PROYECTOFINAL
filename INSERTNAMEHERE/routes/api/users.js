var express = require('express');
var router = express.Router();


function initUsers(db){
    var mongoModel = require('../../models/usermodel')(db);

    router.get('/', function( req, res, next) {
        mongoModel.getAll(
            function(err, docs){
                if(err) {
                    
                    console.log(err);
                    return res.status(500).json({error:"Algo Paso"});

                }
                return res.status(200).json(docs);
            }
        );
  }); // getAllThings

router.post('/login', function(req, res, next){
    var _userData = req.body;
    if(req.body.email === "rodri.595@hotmail.com"
        && req.body.password ==="baleadas") {
            req.session.logged = true;
            req.session.loggeduser = req.body.email;
            res.status(200).json({"msg":"ok"});
        } else {
            res.status(403).json({"error":"Credenciales no válidas"});
        }
});// post login

router.get('/logout', function (req, res, next) {
    var _userData = req.body;
    req.session.logged=false;
    req.session.loggeduser = null;
    res.json({ "msg": "ok" });
});// post login

router.get('/session', function (req, res, next) {
  res.json({ "active": req.session.logged && true});
});// post login





  
  
  return router;
}// fin initUsers

module.exports = initUsers;

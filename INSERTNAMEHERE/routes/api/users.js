var express = require('express');
var router = express.Router();


function initUsers(db){
    var mongoModel = require('../../models/usermodel')(db);
    var validateRegisterInput = require('../../validator/validator');
    var validateLoginInput = require("../../validator/login");
    var newusertp = {
      "name" : "",
      "lastname" : "",
      "email" : "",
      "user" : "",
      "password" : "",
      "datecreate":""
    };

    router.get('/all', function( req, res, next) {
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



  
  router.get('/logout', function (req, res, next) {
    var _userData = req.body;
    req.session.logged=false;
    req.session.loggeduser = null;
    res.json({ "msg": "ok" });
  });// post login
  
  router.get('/session', function (req, res, next) {
    res.json({ "active": req.session.logged && true});
  });// post login
  
  
    ///////////////////////////login no encrypt
  router.post('/login', function(req, res, next){
      if(req.body.email === "rodri.595@hotmail.com"
          && req.body.password ==="baleadas") {
              req.session.logged = true;
              req.session.loggeduser = req.body.email;
              res.status(200).json({"msg":"ok"});
            } else {
              res.status(403).json({"error":"Credenciales no válidas"});
            }
          });// post login

          //////////////////////////////////////////////////////////////////sign up with encrypt funciona-ish
            router.post('/new', function(req, res, next){
                const { errors, isValid } = validateRegisterInput(req.body);
                if (!isValid) {
                  return res.status(400).json(errors);
                }
              var _userData = Object.assign({} , newusertp, req.body);
              var dateT = new Date();
              dateT.getDate();
              _userData.datecreate = dateT;
              mongoModel.addNewUser(_userData, (err, newUser)=>{
                if(err){
                  console.log(err);
                  return res.status(500).json({"error":"No se puede crear usuario"});
                }
                return res.status(200).json(newUser);
              });
            });// nuevo user









            
/////////////////////////////login encrypt////////////////////////////////////////////////////

// router.post("/login", (req, res) => {
//   const { errors, isValid } = validateLoginInput(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   mongoModel.login(req.body, (err)=>{
//     if(err){
//       console.log(err);
//       return res.status(500).json({"error":"No se puede iniciar sesion"});
//     }
//     else{
//     req.session.logged = true;
//     req.session.loggeduser = req.body.email;
//     res.status(200).json({"msg":"ok"});
//     }
//   });



// });


// router.get('/login', function (req, res, next){
//   console.log({"msg":"ok333"});
//   mongoModel.login(req.body, (err, Doc)=>{
//     if(err){
//       console.log(err);
//       console.log("error por aqui aqui 2");
//       return res.status(500).json({"error":"Error al iniciar sesion"});
//     }else{
//       if(req.body.email === Doc.email && req.body.password === Doc.password) {
//         req.session.logged = true;
//         req.session.loggeduser = req.body.email;
//         res.status(200).json({"msg":"ok"});
//         console.log("error por aqui aqui 3");
//       } else {
//         res.status(403).json({"error":"Credenciales no válidas"});
//         }
//   } });
// }); 

// PARA SABER LA PASSWORD PUEDE BUSCAR EN .../INFO.txt o crear user nuevo lol



//no da el redirect despues de crear usuario por medio de react , sera que se debe aplicar el ridirect en el backend?
  
  return router;
}// fin initUsers

module.exports = initUsers;

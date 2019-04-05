var express = require('express');
var router = express.Router();

function apiInit(db){
    var usersApi = require('./api/users')(db);
    var blogApi = require('./api/blog')(db);

    function verificarLogin(req, res, next ){
        var isLoggedIn = req.session.logged && true;
        if(isLoggedIn){
          next();
        }else{
          res.status(403).json({"error":"No Autorizado"});
        }
      }
    
    router.use('/users', verificarLogin, usersApi);
    router.use('/blog', verificarLogin, blogApi);

    return router;
}
module.exports = apiInit;

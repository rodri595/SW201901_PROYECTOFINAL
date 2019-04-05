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





  
  
  return router;
}// fin initUsers

module.exports = initUsers;

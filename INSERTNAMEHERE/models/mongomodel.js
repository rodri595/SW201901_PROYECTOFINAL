var ObjectId = require("mongodb").ObjectID;

function mongomodel(db){

    var lib = {};
    var tableuser = db.collection('users');
    
    lib.getAll = (handler)=>{
        tableuser.find({}).toArray(
          (err , docs) => {
            if(err){
              handler(err, null);
            }else{
              handler(null, docs);
            }
          }
         ); //toArray
    }//end get all from table user
  
  return lib;
}// fin mongomodel



module.exports = mongomodel;

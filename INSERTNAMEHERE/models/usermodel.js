const bcrypt = require("bcryptjs");
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
        
        
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// create user ENCRYPT///////////////////////////////////////////////////////////
/////////////////////////////funciona pero no Redirect al homepagepor medio de frontend////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
lib.addNewUser = (newUser)=>{
  tableuser.findOne({ "user": newUser.user}).then(sign => {
      if (sign) {
          return res.status(400).json({ user: "User already exists" });
    } else{
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          tableuser.insertOne(newUser);
        });
      });
    }});
  }










        ///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// registar create user funciona al 100% ///////////////////////////////////
/////////////////////////viejo///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        
    // lib.addNewUser = (newUser, handler)=>{
    //   tableuser.insertOne(newUser, (err, r)=>{
    //     if(err){
    //       handler(err, null);
    //     }else{
    //       handler(null, r.result);
    //     }
    //   }); //insert One
    // }// addNewUSER
    






    



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// LOGIN ENCRYPT///////////////////////////////////////////////////////////
/////////////////////////testing not working yet//////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// lib.login = (user)=>{
//   const email = user.email;
//   const password = user.password;

//   tableuser.findOne({ email }).then(login => {
//     if (!login) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
//     bcrypt.compare(password, login.password).then(isMatch => {
//       if (isMatch) {
//         return res.status(200).json({"msg":"ok"});
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });

// }


lib.login = (info, handler)=>{
  console.log("error por aqui aqui 2");
  tableuser.find({  $and: [{"email": info.email},{"password": info.password}]}).toArray(
    (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
  });
}




  
  return lib;
}// fin mongomodel



module.exports = mongomodel;

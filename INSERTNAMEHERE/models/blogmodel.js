var ObjectId = require("mongodb").ObjectID;

function mongomodel(db){

    var lib = {};
    var tableblog = db.collection('blog');
    
    lib.getAll = (handler)=>{
        tableblog.find({}).toArray(
          (err , docs) => {
            if(err){
              handler(err, null);
            }else{
              handler(null, docs);
            }
          }
         ); //toArray
    }//end get all from table user


    lib.getBlogById = (blogId, handler)=>{
      tableblog.findOne({ "_id": new ObjectId(blogId)}, (err, doc)=>{
          if(err){
            handler(err, null);
          }else{
            handler(null, doc);
          }
        }); // findOne
    } // getBlogById


    lib.addNewBlogpost = (newBlog, handler)=>{
      tableblog.insertOne(newBlog, (err, r)=>{
        if(err){
          handler(err, null);
        }else{
          handler(null, r.result);
        }
      }); //insert One
    }// addNewBlogpost
    
    lib.deleteById = (Id, handler)=>{
      tableblog.deleteOne({"_id": ObjectId(Id)}, (err, rslt)=>{
      if(err){
        console.log(err);
        handler(err, null);
      } else {
        handler(null, rslt.result);
      }
      }); // deleteOne
    } // deleteById

    lib.getBlogByautor = (userId, handler)=>{
      tableblog.findOne({ "user": new ObjectId(blogId)}, (err, doc)=>{
          if(err){
            handler(err, null);
          }else{
            handler(null, doc);
          }
        }); // findOne
    } // getBlogById

    lib.getBlogByautor = (user, handler)=>{
      var query= {"user": {"$in": Array.isArray(user)? user: [user]}};
      tableblog.find(query).toArray((err, docs) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, docs);
        }
      }); // findOne
    } // getBlogById
  
  return lib;
}// fin mongomodel




module.exports = mongomodel;

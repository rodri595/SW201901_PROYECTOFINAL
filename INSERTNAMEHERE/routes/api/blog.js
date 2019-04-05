var express = require('express');
var router = express.Router();


function initBlog(db){
    var mongoModel = require('../../models/blogmodel')(db);

    var blogposttp = {
        'Title':'',
        'Post':'',
        'user': ''
      };

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


    router.get('/byid/:blogid', (req, res, next)=>{
        mongoModel.getBlogById(req.params.blogid, (err, blogDoc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"Error al obtener el blogpost"});
          }
          return res.status(200).json(blogDoc);
        } );//getblogpost By Id
      }); // byid:blogid

      router.post('/new', function(req, res, next){
        var _blogData = Object.assign({} , blogposttp, req.body);
        mongoModel.addNewBlogpost(_blogData, (err, newBlogpost)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"No se puede crear un nuevo blogpost"});
          }
          return res.status(200).json(newBlogpost);
    });// addNewBlogpost
});

    

    router.delete('/delete/:blogId', function(req, res, next){
        var _BlogId = req.params.blogId;
        mongoModel.deleteById(_BlogId, (err, result)=>{
        if(err){
            return res.status(500).json({"error":"No se pudo eliminar el blogpost"});
        }
        return res.status(200).json(result);
    });//delete blog post by id
    });


    
    router.get('/autor/:user', (req, res, next)=>{
        mongoModel.getBlogByautor(req.params.user, (err, blogDoc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"Error al obtener el blogpost"});
          }
          return res.status(200).json(blogDoc);
        } );//getblogpost By autor
      }); // autor:user



    
  
  
  return router;
} // fin initBlog

module.exports = initBlog;

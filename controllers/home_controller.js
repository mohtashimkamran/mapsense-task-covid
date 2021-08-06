const User = require("../models/user");

module.exports.home = function(req,res){
    return res.render('home',{

        title: "Home Page"
    });
};


module.exports.fetch = function(req,res){
    User.create(req.body,function(err,user){
        if (err){
            console.log("error occured in saving users data to db");
            return;
        }
        else{
            console.log(user);
            return res.redirect('back');
        }
    })
}
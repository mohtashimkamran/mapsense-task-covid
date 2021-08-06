const express = require('express');
const port = 2000;
const app = express();

//for database
// const db = require('./config/mongoose');



app.use(express.urlencoded());


//for static files
app.use(express.static('./assets'));

//setting up view engine
app.set('view engine','ejs');
app.set('views',"./views")

//use express router
//for home page
app.use('/',require('./routes'));


app.listen(port,function(err){
    if (err){
        console.error.bind("Error in starting the server");
        return;
    }
    else{
        console.log("Server is up and running on:",port);
    }
});
var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res){
   var query = (req.query.search);// Store the input text which will be search item here in a variable.
   var url = "http://www.omdbapi.com/?apikey=thewdb&s="+query;// append the url and the variable above.
   request(url, function(error, response, body){
       //if(!error & response.statuscode == 200){
         var data = JSON.parse(body);// Store the parsed JSON data of body in a variable.
         res.render("results", {data: data});
   });
});


app.listen(3000, function(){
   console.log("Movie APP has started!!!"); 
});
var Datastore = require('nedb');
//create instance of datastore
//will save data  into json file
var db = new Datastore({filename: "data.db", autoload:true})

var showdb = new Datastore({filename:"showData.db", autoload:true})

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

//APRIL 2 -- P5JS HOMEWORK
app.get('/favshow',function(req,res){
    showdb.find({},function(err,docs){
        res.render('favshow.ejs',{data:docs})
    })
//    res.render('favshow.ejs',{})
})

app.get('/data',function(req,res){
    showdb.find({},function(err,docs){
        //var passData = {data:docs}
        res.send({data:docs})
    })
})
app.post('/showForm',function(req,res){
    var show;
    if (req.body.show){
        //update the database
        console.log("you added to existing show: ", req.body.show)
        showdb.update({show: req.body.show},{$inc: {count: 1}}, {upsert:true},function(){
            console.log("update")
        })
    } else{
        //add to database
        let data = {
            show:req.body.newOption,
            count:1,
            xLoc: Math.floor(Math.random()*600),
            yLoc:Math.floor(Math.random()*400),
            color:[Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]
        }
        showdb.insert(data,function(err,newDocs){
            console.log("err: ", err);
            console.log("new show doc: ", newDocs)
        })
        console.log("new show: ", req.body.newOption)
    }
    //console.log("data: ", req.body)
    showdb.find({},function(err,docs){
        res.render('favshow.ejs',{data:docs})
    })
})

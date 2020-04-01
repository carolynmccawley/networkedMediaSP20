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


//MIDTERM CODE
app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.redirect('/nostalgia.html')
  });
app.listen(80, function () {
    console.log('Example app listening on port 80!')
});

app.get('/gilligan',function(req,res){
    db.find({show:"Gilligan's Island"}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('gilligan.ejs',{gData: docs})
    })
//    res.render('gilligan.ejs',{})
})

app.post('/gilligan',function(req,res){
    var data = {
        network: 'old',
        show:"Gilligan's Island",
        comment: req.body.gilliganComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("gilligan  doc: ", newDocs)
    })
    db.find({show:"Gilligan's Island"}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('gilligan.ejs',{gData: docs})
    })
//    res.render('gilligan.ejs',{someData: db})
})

app.get('/disney',function(req,res){
    db.find({network:'disney'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('disney.ejs',{dData: docs})
    })
    //res.render('disney.ejs',{someData:db})
})

app.post('/kimp',function(req,res){
    var data = {
        network: "disney",
        show: "Kim Possible",
        comment: req.body.kimpComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err, newDocs){
        console.log("err", err);
        console.log("kim p newDocs: ", newDocs);
    });
    db.find({network:'disney'}).sort({timestamp:1}).exec(function(err,docs){
        res.render('disney.ejs',{dData: docs})
    })
})

app.post('/lilo',function(req,res){
    var data = {
        network: 'disney',
        show: 'Lilo & Stitch',
        comment: req.body.liloComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("lilo newDocs: ", newDocs)
    })
    db.find({network:'disney'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('disney.ejs',{dData: docs})
    })
})

app.post('/raven',function(req,res){
    var data = {
        network: 'disney',
        show: "That's So Raven",
        comment:req.body.ravenComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("raven newDocs: ", newDocs);
    })
    db.find({network:'disney'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('disney.ejs',{dData: docs})
    })
})

app.post('/suitelife',function(req,res){
    var data = {
        network: 'disney',
        show: 'Suite Life',
        comment: req.body.suiteComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("suite life newDocs: ", newDocs)
    })
    db.find({network:'disney'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('disney.ejs',{dData: docs})
    })
})

app.get('/nick',function(req,res){
    db.find({network:'nick'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('nick.ejs',{nData: docs})
    })
    //res.render('nick.ejs',{})
})

app.post('/danny',function(req,res){
    var data = {
        network: 'nick',
        show: 'Danny Phantom',
        comment: req.body.dannyComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("danny newDocs: ", newDocs)
    })
    db.find({network:'nick'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('nick.ejs',{nData: docs})
    })
    //res.render('nick.ejs',{nickData: db})
})

app.post('/spongebob',function(req,res){
    var data = {
        network: 'nick',
        show: 'Spongebob Squarepants',
        comment: req.body.spongebobComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("spolongbob newDocs: ", newDocs)
    })
    db.find({network:'nick'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('nick.ejs',{nData: docs})
    })
    //res.render('nick.ejs',{nickData: db})
})

app.post('/fairly',function(req,res){
    var data = {
        network: 'nick',
        show: 'Fairly Oddparents',
        comment: req.body.fairlyComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("fairly newDocs: ", newDocs)
    })
    db.find({network:'nick'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('nick.ejs',{nData: docs})
    })
    //res.render('nick.ejs',{nickData: db})
})

app.post('/drakejosh',function(req,res){
    var data = {
        network: 'nick',
        show: 'Drake & Josh',
        comment: req.body.drakejoshComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("drake newDocs: ", newDocs)
    })
    db.find({network:'nick'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('nick.ejs',{nData: docs})
    })
    //res.render('nick.ejs',{nickData: db})
})

app.get('/cartoonnetwork',function(req,res){
    db.find({network:'cartoon network'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('cartoonnetwork.ejs',{cnData: docs})
    })
    //res.render('cartoonnetwork.ejs',{})
})
app.post('/teentitans',function(req,res){
    var data = {
        network: 'cartoon network',
        show: 'Teen Titans',
        comment: req.body.teentitansComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("teentitans newDocs: ", newDocs)
    })
    db.find({network:'cartoon network'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('cartoonnetwork.ejs',{cnData: docs})
    })
    //res.render('cartoonnetwork.ejs',{cnData: db})
})

app.post('/pgirls',function(req,res){
    var data = {
        network: 'cartoon network',
        show: 'Powerpuff Girls',
        comment: req.body.pgirlsComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("powerpuff newDocs: ", newDocs)
    })
    db.find({network:'cartoon network'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('cartoonnetwork.ejs',{cnData: docs})
    })
    //res.render('cartoonnetwork.ejs',{cnData: db})
})

app.post('/courage',function(req,res){
    var data = {
        network: 'cartoon network',
        show: 'Courage the Cowardly Dog',
        comment: req.body.courageComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("courage newDocs: ", newDocs)
    })
    db.find({network:'cartoon network'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('cartoonnetwork.ejs',{cnData: docs})
    })
    //res.render('cartoonnetwork.ejs',{cnData: db})
})

app.post('/grim',function(req,res){
    var data = {
        network: 'cartoon network',
        show: 'The Grim Adventures of Billy & Mandy',
        comment: req.body.grimComment,
        timestamp: Date.now()
    }
    db.insert(data,function(err,newDocs){
        console.log("err: ", err);
        console.log("grim newDocs: ", newDocs)
    })
    db.find({network:'cartoon network'}).sort({timestamp:1}).exec(function(err,docs){
    //db.find({show:"Gilligan's Island"},function(err,docs){
        res.render('cartoonnetwork.ejs',{cnData: docs})
    })
    //res.render('cartoonnetwork.ejs',{cnData: db})
})

app.post('/networkQuiz',function(req,res){
    console.log(req.body);
    //res.send("Thanks");
    let disneyCount = 0;
    let nickCount = 0;
    let cnCount = 0;
    if (req.body.q1 == 'nick'){nickCount+=1;}
    else if (req.body.q1 == 'disney'){disneyCount +=1;}
    else if (req.body.q1 == 'cn'){cnCount +=1;}
    
    if (req.body.q2 == 'nick'){nickCount+=1;}
    else if (req.body.q2 == 'disney'){disneyCount +=1;}
    else if (req.body.q2 == 'cn'){cnCount +=1;}
    
    if (req.body.q3 == 'nick'){nickCount+=1;}
    else if (req.body.q3 == 'disney'){disneyCount +=1;}
    else if (req.body.q3 == 'cn'){cnCount +=1;}
    
    if (req.body.q4 == 'nick'){nickCount+=1;}
    else if (req.body.q4 == 'disney'){disneyCount +=1;}
    else if (req.body.q4 == 'cn'){cnCount +=1;}
    
    if (req.body.q5 == 'nick'){nickCount+=1;}
    else if (req.body.q5 == 'disney'){disneyCount +=1;}
    else if (req.body.q5 == 'cn'){cnCount +=1;}
    
    console.log("disney score: ", disneyCount, " nick score: ", nickCount, "cn score: ", cnCount)
    
    console.log("q1: ", req.body.q1)
    if (cnCount > disneyCount && cnCount > nickCount){
        let data = {
            answer:'cn',
            color:'#ef6481'
        }
        res.render('ta-da.ejs',{results:data})
    } else if (disneyCount > nickCount){
        let data = {
            answer:'disney',
            color:'#F9F030'
        }
        res.render('ta-da.ejs',{results:data})
    } else {
        let data = {
            answer:'nick',
            color:'#48ec02'
        }
        res.render('ta-da.ejs',{results:data})
    }
})



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
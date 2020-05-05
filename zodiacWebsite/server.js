var http = require('http');

var fs = require('fs');

var Datastore = require('nedb');
//create instance of datastore
//will save data  into json file
var db = new Datastore({filename: "data.db", autoload:true});
var imagedb = new Datastore({filename: "imagedata.db", autoload:true})
//
//var showdb = new Datastore({filename:"showData.db", autoload:true})
//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 

app.set('view engine', 'ejs');
app.use(express.static('public'));
const fetch = require("node-fetch");


app.listen(80, function () {
    console.log('Example app listening on port 80!')
});

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.redirect('/zodiac/newest')
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
        res.render('disney.ejs',{dData: docs})
    })
})

app.get('/nick',function(req,res){
    db.find({network:'nick'}).sort({timestamp:1}).exec(function(err,docs){
        res.render('nick.ejs',{nData: docs})
    })
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
        res.render('nick.ejs',{nData: docs})
    })

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
        res.render('nick.ejs',{nData: docs})
    })
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
            xLoc: Math.floor(Math.random()*500),
            yLoc:Math.floor(Math.random()*300),
            color:[Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]
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


/*-----------------------------------FINAL PROJECT------------------------------------------------------------*/
//var request = require('request');
var multer  = require('multer');
// bit of a security risk
var upload = multer({ dest: 'public/uploads/' });

//list of tags
var tagList = ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'];
var votingData = {
    'leastTotal':120,
    'mostTotal':120,
    data: [
        {
            'sign':'Capricorn',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#666B67'
        },
        {
            'sign':'Aquarius',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#80BFEA'
        },
        {
            'sign':'Pisces',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#A1E2C4'
        },
        {
            'sign':'Aries',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#FF5353'
        },
        {
            'sign':'Taurus',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#80C182'
        },
        {
            'sign':'Gemini',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#FFE152'
        },
        {
            'sign':'Cancer',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#C8C8C8'
        },
        {
            'sign':'Leo',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#FFA35A'
        },
        {
            'sign':'Virgo',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#B08366'
        },
        {
            'sign':'Libra',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#FDBDBD'
        },
        {
            'sign':'Scorpio',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#242424'
        },
        {
            'sign':'Sagittarius',
            'mostVotes':10,
            'leastVotes':10,
            'color':'#C0ADEF'
        },
    ]
}
app.get('/zodiacInfo/:sign',async function(req,res){
    const sign = req.params.sign;
    let api_url = `https://zodiacal.herokuapp.com/${sign}`
    const response = await fetch(api_url);
    const json = await response.json();
    res.render('sign.ejs',{data:json})
});



app.get('/zodiac',function(req,res){
    res.redirect('/zodiac/newest')
})

app.get('/zodiac/:sortBy',function(req,res){
    if (req.params.sortBy == 'newest'){
       let sort = 'newest';
        imagedb.find({}).sort({timestamp:1}).exec(function(err,docs){
            let data = {
                data:docs, 
                sortBy:sort,
                tagList:tagList,
                voting:votingData
            }
            res.render('zodiac.ejs',{data: data})
        })
    }
    else if (req.params.sortBy == 'oldest'){ 
        let sort = 'oldest' 
       imagedb.find({}).sort({timestamp:1}).exec(function(err,docs){
            let data = {
                data:docs, 
                sortBy:sort,
                tagList:tagList,
                voting:votingData
            }
            res.render('zodiac.ejs',{data: data})
//            res.render('zodiac.ejs',{data: docs,sortBy:sort})
        })
    } else{
        let sort = 'trend'
        imagedb.find({}).sort({likes:-1}).exec(function(err,docs){
            //console.log("doc: ", docs)
            let data = {
                data:docs,
                sortBy:sort,
                tagList:tagList,
                voting:votingData
            }
            res.render('zodiac.ejs',{data:data})
        })
    }
})
app.get('/upload',function(req,res){
    res.render('upload.ejs',{tags:tagList})
})

app.post('/uploadMeme', upload.single('thefile'), function (req, res) {
    //console.log("meme data: ", req.body);
    //let signObj = req.body;
    let imageTags = Object.keys(req.body);
    imageTags.splice( imageTags.indexOf('newOption'), 1 );
    //console.log(Object.keys(signObj))
	//console.log("file Uploaded: ");
	//console.log(req.file);
	for (var i =0; i < imageTags.length;i++){
        if(!(tagList.includes(imageTags[i]))){
           //console.log("adding new: ");
            tagList.push(imageTags[i]);
        }
    }

	if (req.file.mimetype != "image/jpeg") {
		fs.unlinkSync(req.file.path);
		//console.log("deleting file");
	}
	else {
		fs.renameSync(req.file.path, req.file.path + ".jpg");
	}


  var data = {
      timestamp: Date.now(),
      likes: 0,
      tags:imageTags,
      file: req.file.filename + ".jpg"
  };


  imagedb.insert(data, function (err, newDocs) {
	console.log("err: " + err);
  });
    res.redirect('/zodiac')
});


app.post('/like/:imageID',function(req,res){
    let imageID = req.params.imageID;
    imagedb.update({file: imageID},{$inc: {likes: 1}}, {upsert:true},function(){
            console.log("update");
    })
    res.redirect('/zodiac')
})


app.post('/filter',function(req,res){
    //console.log(req.body);
    let imageTags = Object.keys(req.body);
    imagedb.find({ tags: { $in: imageTags }}, function (err, docs) {
        //console.log("filter: ",docs)
       let data = {
           data:docs,
           sortBy:'newest',
           tagList:tagList,
           filters:imageTags,
           voting:votingData
       }
       res.render('zodiac.ejs',{data:data})
});
    
})

app.post('/voteMost',function(req,res){
    let vote = req.body.voteMost;
    let votes = votingData.data;
    votingData.mostTotal+=1;
    for (var i =0; i < votes.length; i++){
        if (votes[i].sign == vote){
            votes[i].mostVotes+=1;
        }
    }
    res.redirect('/zodiac')
})

app.post('/voteLeast',function(req,res){
    let vote = req.body.voteLeast
    let votes = votingData.data;
    votingData.leastTotal+=1;
    for (var i =0; i < votes.length; i++){
        if (votes[i].sign == vote){
            votes[i].leastVotes+=1;
        }
    }

    res.redirect('/zodiac')
})

app.get('/votingData',function(req,res){
    res.send({data:votingData})
})



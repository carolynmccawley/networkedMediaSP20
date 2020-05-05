var signdata = [];
var leastTotal;
var mostTotal;
function loadData() {
  console.log('data fetch')
    signdata = [];
    leastTotal = 0;
    mostTotal = 0;
	fetch('/votingData')
	  .then((response) => {
        //console.log("reponse: ", response.json())
		return response.json();
	  })
	  .then((incoming) => {
		console.log("*****");
		console.log(incoming);
        //console.log("leastTotal: ",leastTotal)
        //console.log("mostTotal ",mostTotal)
        leastTotal = incoming.data.leastTotal;
        mostTotal = incoming.data.mostTotal;
		signdata = incoming.data.data;  
        console.log("leastTotal: ",leastTotal)
        console.log("mostTotal ",mostTotal)
        console.log("signData: ",signdata)
	
	
	
	  });
	  
	  setTimeout(loadData, 10000);
   
	}


function setup() {
  let canvas=createCanvas(600,500);
  canvas.parent('sketch-holder');
  noStroke();
  //noLoop(); // Run once and stop
  loadData();
//background(255)
  
    
}

function draw() {
    textFont('Georgia');
  var h =  150;
  for (let x = 0; x < signdata.length; x ++){
    fill(signdata[x].color);
    ellipse(250, h+15, 15, 15);
    fill(0);
    textSize(12)
    text(signdata[x].sign, 270, h + 15);
    h += 20;
  }
  pieChart1(200, signdata);
  pieChart2(200,signdata);
}

function pieChart1(diameter, data) {
    textFont('Georgia');
    fill(0);
    textSize(20)
    text("Most Problematic Sign",10,30)
  //console.log("pie chart: ", data)
  let lastAngle = 0;
var h =  10;
  for (let i = 0; i < data.length; i++) {
    //let gray = map(i, 0, data.length, 0, 255);
    //console.log(data[i].color)
    fill(data[i].color);
    // console.log("votes: ", data[i].mostVotes, "total: ", totalMost)
    let degAngle = ((data[i].mostVotes)/mostTotal)*360;
    arc(
      width / 5,
      height / 4+15,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(degAngle)
    );
    lastAngle += radians(degAngle);
  }
}

function pieChart2(diameter, data) {
   fill(0);
    textSize(20)
    text("Least Problematic Sign",10,270)
  //console.log("pie chart: ", data)
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    //let gray = map(i, 0, data.length, 0, 255);
    console.log(data[i].sign)
    fill(data[i].color);
    //console.log("votes: ", data[i].mostVotes, "total: ", totalLeast)
    let degAngle = round(((data[i].leastVotes)/leastTotal)*360);
    //console.log("angle in degrees: ",degAngle)
    arc(
      width / 5,
      height/1.4+25,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(degAngle)
    );
    lastAngle += radians(degAngle);

  }
}
var data = [];
function loadData() {
    data = [];
	fetch('/data')
	  .then((response) => {
		return response.json();
	  })
	  .then((incoming) => {
		console.log("*****");
		console.log(incoming);
		data = incoming.data;  
	
	
	
	  });
	  
	  setTimeout(loadData, 10000);
   
	}

function setup() {
  createCanvas(600, 400);
  loadData();
   print("setup: ", data)
  
}

function draw() {
    background(255);
    for (var i = 0; i < data.length; i++){
      print("IN FOR LOOP: ", data[i])
    var x = data[i].xLoc;
    var y = data[i].yLoc;
    print("rad: ", data[i].count)
    //var rad = data[i].count;
    var rad = pow(2, data[i].count)
    fill(data[i].color[0],data[i].color[1],data[i].color[2],data[i].color[3])
    //fill (255,0,150,100);
    noStroke();
    ellipse(x,y,rad*2,rad*2)
  }
    
}
var res;
var length;
function preload(){
alarm = loadSound("alarm.mp3");
}


function setup(){
canvas = createCanvas(800,500);
canvas.center()
video=createCapture(VIDEO);
video.hide();
objectdetector = ml5.objectDetector("cocossd" , modelloaded);
}

function draw(){
image(video,0,0,00,500);

objectdetector.detect(video , gotresults);

for(i =0; i < length ;i = i+1){
if(res[i].label != "person"){
  document.getElementById("status").innerHTML = "Baby Not Detected";
  alarm.play()
}else{
  alarm.pause()
  document.getElementById("status").innerHTML = "Baby Detected"
}
}
}


function modelloaded(){
  console.log("loaded");
  
}

function gotresults(results , error){
  if(error){
  console.log(error);
  }else{
console.log(results);
res = results;
length = results.length
  }
}


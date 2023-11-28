noseX = 0 ;
noseY = 0 ;

function preload() {
    mustache = loadImage('https://i.postimg.cc/s2nMsCH4/mustache.png') ;
}

function setup() {
    canvas = createCanvas(300 , 300) ;
    canvas.position(530 , 200)
    video = createCapture(VIDEO) ;
    video.size(300 , 300) ;
    video.hide() ;

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on('pose' , gotPoses) ;
}

function modelLoaded() {
    console.log("PoseNet is Initialised") ;
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
        noseX = results[0].pose.nose.x - 18 ;
        noseY = results[0].pose.nose.y - 5 ;
        console.log("Nose X = " + noseX) ;
        console.log("Nose Y = " + noseY) ;
    }
}

function draw() {
    image(video , 0 , 0 , 300 , 300) ;
    image(mustache , noseX , noseY , 45 , 45) ;
}


function take_snapshot(){
    save("MustacheByAnupam.png");
}
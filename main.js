function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(260,130);

    canvas = createCanvas(550,460);
    canvas.position(260, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized.');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
      }
}
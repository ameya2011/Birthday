function setup(){
canvas=createCanvas( 500, 400);
canvas.position(200, 200);
video=createCapture(VIDEO);
video.hide();
tint_colour="";
}

function draw(){
image(video, 100, 50, 300, 300);

fill(139, 252, 169)

circle(80, 40, 50);
circle(80, 70, 50);
circle(80, 100, 50);
circle(80, 130, 50);
circle(80, 160, 50);
circle(80, 190, 50);
circle(80, 220, 50);
circle(80, 250, 50);
circle(80, 280, 50);
circle(80, 310, 50);
circle(80, 340, 50);

circle(110, 340, 50);
circle(140, 340, 50);
circle(170, 340, 50);
circle(200, 340, 50);
circle(230, 340, 50);
circle(260, 340, 50);
circle(290, 340, 50);
circle(320, 340, 50);
circle(350, 340, 50);

circle(400, 340, 50);
circle(400, 310, 50);
circle(400, 280, 50);
circle(400, 250, 50);
circle(400, 220, 50);
circle(400, 190, 50);
circle(400, 160, 50);
circle(400, 130, 50);
circle(400, 100, 50);
circle(400, 70, 50);
circle(400, 40, 50);

circle(350, 40, 50);
circle(320, 40, 50);
circle(290, 40, 50);
circle(260, 40, 50);
circle(230, 40, 50);
circle(200, 40, 50);
circle(170, 40, 50);
circle(140, 40, 50);
circle(110, 40, 50);
}

function take_snapshot(){
save('birthday.png');
}


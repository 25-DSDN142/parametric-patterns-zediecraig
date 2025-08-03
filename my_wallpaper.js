let colourChanger =2;//changes the colour of the octopus,1=blue,2=red,3=green.
let backgroundShape = 1;//changes between circle(1) and square(2).
let rectRounding = 20;//changes sqaure length
let curved = 30;//changes the curviness of the tentacles.
let eye = 30;//changesthe curviness of the eyes.
let tentacle = 100;//curviness of suction parts
let tenctacleWidth = 13;// tentacle width.
let creamCircle = 90;// radius of cream circle.

function setup_wallpaper(pWallpaper) {
  // pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); 

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

}

function wallpaper_background() {
  background(126, 179, 189); //light blue
}

function my_symbol() { 
 let myColour1 = color(173, 88, 64);//rusty red
 let myColour2 = color(68, 102, 65);//green

  noStroke()
  rectMode(CENTER);

//BACKGROUND

//If statment for the backorund
if(backgroundShape == 1){

// backround circles
fill(252,222,214)// cream
ellipse(50,50,creamCircle)
ellipse(50,150,creamCircle)
fill(242, 104, 73)//red
ellipse(50,50,80)
ellipse(50,150,80)
fill(255, 217, 66)//yellow
ellipse(50,50,70)
ellipse(50,150,70)
fill(230, 141, 58)//orange
ellipse(50,50,60)
ellipse(50,150,60)
}

else if(backgroundShape == 2){

  //backround squares
fill(252,222,214)//cream
rect(50,50,83,rectSize)
rect(50,150,83,rectSize)
fill(242, 104, 73)//red
rect(50,50,80,rectSize)
rect(50,150,80,rectSize)
fill(255, 217,66)//yellow
rect(50,50,70,rectSize)
rect(50,150,70,rectSize)
fill(230, 141, 58)//orange
rect(50,50,60,rectSize)
rect(50,150,60,rectSize)
}

//If statment for the colours
if(colourChanger == 1){
  fill(75, 109, 153);
}
else if(colourChanger == 2){
  fill(myColour1);
}
else{
  fill(myColour2);
}
//OCTOPUS SHAPE
//arms
rect(20,145,50,tenctacleWidth)
rect(45,120,tenctacleWidth,50)
rect(65,95,40,tenctacleWidth)
rect(85,105,tenctacleWidth,20)
rect(75,155,tenctacleWidth,80)
rect(87.5,195,25,tenctacleWidth)
rect(100,180,tenctacleWidth,30)
rect(94,165,10,tenctacleWidth)
rect(87.5,170,tenctacleWidth,20,curved)
rect(105,125,tenctacleWidth,40)
rect(115,145,20,tenctacleWidth)
rect(125,160,tenctacleWidth,30)
rect(140,175,30,tenctacleWidth)
rect(155,185,tenctacleWidth,20)
rect(150,195,15,tenctacleWidth)
rect(135,95,20,tenctacleWidth)
rect(145,110,tenctacleWidth,30)
rect(150,125,10,tenctacleWidth)
rect(155,135,tenctacleWidth,20)
rect(180,145,50,tenctacleWidth)
rect(170,65,60,tenctacleWidth)
rect(20,65,40,tenctacleWidth)
rect(40,55,tenctacleWidth,20)
rect(60,45,40,tenctacleWidth)
rect(85,25,tenctacleWidth,50)
rect(120,20,40,tenctacleWidth)
rect(100,30,tenctacleWidth,20)
rect(140,35,tenctacleWidth,30)
rect(155,23,tenctacleWidth,15)
rect(165,15,20,tenctacleWidth)
rect(175,30,tenctacleWidth,30)
rect(150,45,50,tenctacleWidth)

//rounded/corner parts
rect(85,100,tenctacleWidth,tenctacleWidth,curved)
rect(45,145,tenctacleWidth,tenctacleWidth,curved)
rect(45,95,tenctacleWidth,tenctacleWidth,curved)
rect(80,115,20,tenctacleWidth,curved)
rect(75,195,tenctacleWidth,tenctacleWidth,curved)
rect(100,195,tenctacleWidth,tenctacleWidth,curved)
rect(100,165,tenctacleWidth,tenctacleWidth,curved)
rect(105,145,tenctacleWidth,tenctacleWidth,curved)
rect(125,145,tenctacleWidth,tenctacleWidth,curved)
rect(125,175,tenctacleWidth,tenctacleWidth,curved)
rect(155,175,tenctacleWidth,tenctacleWidth,curved)
rect(155,195,tenctacleWidth,tenctacleWidth,curved)
rect(142.5,195,tenctacleWidth,tenctacleWidth,curved)
rect(145,95,tenctacleWidth,tenctacleWidth,curved)
rect(145,125,tenctacleWidth,tenctacleWidth,curved)
rect(155,125,tenctacleWidth,tenctacleWidth,curved)
rect(155,145,tenctacleWidth,tenctacleWidth,curved)
rect(40,65,tenctacleWidth,tenctacleWidth,curved)
rect(40,45,tenctacleWidth,tenctacleWidth,curved)
rect(100,20,tenctacleWidth,tenctacleWidth,curved)
rect(140,20,tenctacleWidth,tenctacleWidth,curved)
rect(155,15,tenctacleWidth,tenctacleWidth,curved)
rect(175,15,tenctacleWidth,tenctacleWidth,curved)
rect(175,45,tenctacleWidth,tenctacleWidth,curved)
rect(155,30,tenctacleWidth,tenctacleWidth,curved)

rect(120,20,40,tenctacleWidth)
rect(100,30,tenctacleWidth,20)
rect(140,35,tenctacleWidth,30)

//head and neck
rect(112,100,60,20,curved)
ellipse(110,66,70,80)

//tentcales
fill(58, 86, 156)
rect(96,175,5,5,tentacle)
rect(91,176,5,5,tentacle)
rect(96,180,5,5,tentacle)
rect(96,170,5,5,tentacle)
rect(91,171,5,5,tentacle)
rect(142,190,5,5,tentacle)
rect(147,190,5,5,tentacle)
rect(151,187,5,5,tentacle)
rect(151,182,5,5,tentacle)
rect(147,179,5,5,tentacle)
rect(142,179,5,5,tentacle)
rect(165,18,5,5,tentacle)
rect(170,20,5,5,tentacle)
rect(170,25,5,5,tentacle)
rect(170,30,5,5,tentacle)
rect(160,20,5,5,tentacle)
rect(160,25,5,5,tentacle)
rect(160,30,5,5,tentacle)
rect(5,60,5,5,tentacle)
rect(10,60,5,5,tentacle)
rect(15,60,5,5,tentacle)
rect(20,60,5,5,tentacle)
rect(25,60,5,5,tentacle)
rect(5,140,5,5,tentacle)
rect(10,140,5,5,tentacle)
rect(0,140,5,5,tentacle)
rect(185,140,5,5,tentacle)
rect(190,140,5,5,tentacle)
rect(195,140,5,5,tentacle)
rect(200,140,5,5,tentacle)

//tentacle white dots
fill(255)
rect(96,175,2,2,tentacle)
rect(91,176,2,2,tentacle)
rect(96,180,2,2,tentacle)
rect(96,170,2,2,tentacle)
rect(91,171,2,2,tentacle)
rect(142,190,2,2,tentacle)
rect(147,190,2,2,tentacle)
rect(151,187,2,2,tentacle)
rect(151,182,2,2,tentacle)
rect(147,179,2,2,tentacle)
rect(142,179,2,2,tentacle)
rect(165,18,2,2,tentacle)
rect(170,20,2,2,tentacle)
rect(170,25,2,2,tentacle)
rect(170,30,2,2,tentacle)
rect(160,20,2,2,tentacle)
rect(160,25,2,2,tentacle)
rect(160,30,2,2,tentacle)
rect(5,60,2,2,tentacle)
rect(10,60,2,2,tentacle)
rect(15,60,2,2,tentacle)
rect(20,60,2,2,tentacle)
rect(25,60,2,2,tentacle)
rect(5,140,2,2,tentacle)
rect(10,140,2,2,tentacle)
rect(0,140,2,2,tentacle)
rect(185,140,2,2,tentacle)
rect(190,140,2,2,tentacle)
rect(195,140,2,2,tentacle)
rect(200,140,2,2,tentacle)

//eyes//colour outline
fill(58, 86, 156)
rect(95,75,22,12,eye)
rect(125,75,22,12,eye)

fill(252,222,214)//white pupil
rect(95,75,20,10,eye)
rect(125,75,20,10,eye)

fill(0)//black dot
rect(95,75,5,8,eye)
rect(125,75,5,8,eye)


}
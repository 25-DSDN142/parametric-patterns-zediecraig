//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let colourChanger = 2;
let backgroundShape = 1;

let curved =30;
let eye = 20;
let rectRounding =100
let tentacle =0
let width = 10


function setup_wallpaper(pWallpaper) {
  // pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

}

function wallpaper_background() {
  background(126, 179, 189); //light blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 let myColour1 = color(45, 102, 60);
 let myColour2 = color(189, 78, 47);


  noStroke()
  rectMode(CENTER);

//if statment
if(backgroundShape == 1){
  // backround circles
fill(252,222,214)//cream
ellipse(50,50,83)
ellipse(50,150,83)

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
fill(252,222,214)
rect(50,50,83,rectRounding)
rect(50,150,83,rectRounding)

fill(242, 104, 73)
rect(50,50,80,rectRounding)
rect(50,150,80,rectRounding)

fill(255, 217,66)
rect(50,50,70,rectRounding)
rect(50,150,70,rectRounding)

fill(230, 141, 58)
rect(50,50,60,rectRounding)
rect(50,150,60,rectRounding)
}


// else{

// }

//if statment


if(colourChanger == 1){
  fill(27, 57, 130);
}
else if(colourChanger == 2){
  fill(myColour1);
}
else{
  fill(myColour2);
}

//arms
rect(20,145,50,width)//1
rect(45,120,width,50)//2
rect(65,95,40,width)//3

rect(85,105,width,20)//4
rect(75,155,width,80)//5
rect(87.5,195,25,width)//6
rect(100,180,width,30)//7
rect(94,165,10,width)//8
rect(87.5,170,width,20, curved)//9

rect(105,125,width,40)
rect(115,145,20,width)
rect(125,160,width,30)
rect(140,175,30,width)
rect(155,185,width,20)
rect(150,195,15,width)

rect(135,95,20,width)
rect(145,110,width,30)
rect(150,125,10,width)
rect(155,135,width,20)
rect(180,145,50,width)

rect(170,65,60,width)

rect(20,65,40,width)
rect(40,55,width,20)
rect(60,45,40,width)
rect(85,25,width,50)

rect(120,20,40,width)
rect(100,30,width,20)
rect(140,35,width,30)
rect(155,23,width,15)
rect(165,15,20,width)
rect(175,30,width,30)
rect(150,45,50,width)

//rounded/corner parts
rect(85,100,20,20,curved)

rect(45,145,10,10,curved)
rect(45,95,10,10,curved)

rect(80,115,20,10,curved)
rect(75,195,10,10,curved)
rect(100,195,10,10,curved)
rect(100,165,10,10,curved)

rect(105,145,10,10,curved)
rect(125,145,10,10,curved)
rect(125,175,10,10,curved)
rect(155,175,10,10,curved)
rect(155,195,10,10,curved)
rect(142.5,195,10,10,curved)

rect(145,95,10,10,curved)
rect(145,125,10,10,curved)
rect(155,125,10,10,curved)
rect(155,145,10,10,curved)

rect(40,65,10,10,curved)
rect(40,45,10,10,curved)

rect(120,20,40,10)
rect(100,30,10,20)
rect(140,35,10,30)

rect(100,20,10,10,curved)
rect(140,20,10,10,curved)
rect(155,15,11,10,curved)
rect(175,15,10,10,curved)
rect(175,45,10,10,curved)
rect(155,30,10,10,curved)

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

//head & neck
fill(126, 179, 189)
rect(95,75,20,10,eye)
rect(125,75,20,10,eye)



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

//eyes
fill(58, 86, 156)
rect(95,75,22,12,eye)
rect(125,75,22,12,eye)

fill(252,222,214)
rect(95,75,20,10,eye)
rect(125,75,20,10,eye)

fill(0)//black dot
rect(95,75,5,8,eye)
rect(125,75,5,8,eye)



}
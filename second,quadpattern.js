//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(232, 139, 0); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
let isorange = true;
if(isorange){
  fill(232, 139, 0) //orange
}

let blob = 45
let blub = 60

let backround = (230)

  noStroke()
   rectMode(CENTER);

 fill(232, 139, 0)
 rect(50,100, 37, 80, 37)

  fill(0)
  circle(50,50,blob); // 1
  circle(100,50,blob)// 2
 circle(50,100,blob)//4
 circle(100,100,blob)//5
  circle(50,150,blob)//7
  circle(100,150,blob);//8

fill(0)
  circle(100,50,blob)// 
 circle(50,100,blob)//
  circle(100,150,blob);
      circle(150,100,blob)

  fill(0)
rect(100,100,100,97)

fill(232, 139, 0)
  circle(50,50,blub); // topleft blub 
 circle(100,100,blub)//middleblub
  circle(50,150,blub)//leftbottom blub 


  fill(0)
    circle(50,50,blob); // T
 circle(100,100,blob)
  circle(50,150,blob)//l

fill(232, 139, 0)
  circle(150,50,blub); // T
  circle(150,150,blub)//l

fill(0)
  circle(150,50,blob)//top right blub
    circle(150,150,blob)//bottom right blub
  
}






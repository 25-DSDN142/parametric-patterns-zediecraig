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
  background(255, 119, 0); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
fill(0);
noStoke();
rect(10,100,80,120);
circle(50,50,40);






}
//  noStroke()
//   rectMode(CENTER);
//   circle(20,20,37); // Top left circle
//   circle(60,20,37)// second top
//  circle(140,20,37)//4th top
//   circle(180,20,37)//last top
//   rect(100,20,80,37)//rectangle top
// //first row above
//  circle(20,60,37); // 1st
//   circle(60,60,37)// second 
//     circle(100,60,37)// second 
//  circle(140,60,37)//4th top
//   circle(180,60,37)//5th top


// rect(20,200, 37, 80, 37)


// rect(180,160, 37, 37, 37)


// stroke(0)
// strokeweight(5)
// point(85,20);
// point(130,140)











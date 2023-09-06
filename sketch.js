function setup() {
  createCanvas(900, 900);
  background("white");
}
  
function draw() {
 
  stroke("orange");
  fill("red");
                                             
  
      if(mouseIsPressed) {
        rect(mouseX, mouseY, 20, 20,35); 
      }
}  
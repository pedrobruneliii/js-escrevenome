function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    stroke("black");
    fill("pink");
    
    
    
       if(mouseIsPressed)  {
       rect(mouseX, mouseY, 20, 20);
       }
  }
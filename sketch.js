let sz;
let slider
let binnum // string that will hold 9bit binary 
let mybutton;
let mydisplay;
let re = /\b[01]+\b/; // regex to check for binary number

function setup() {
  createCanvas(600, 600);
  input = select('#input');
  input.value('111010111');
  button = select('#btn');
  rectMode(CENTER)
  textAlign(CENTER,CENTER)
  background(230,200,0);
  noStroke();
  fill(0);
  sz = width/8;
  slider = createSlider(2,width/4,width,1);
  slider.changed(changeit)
  button.mousePressed(gochange)

  mybutton = createButton("New random seed");
  
  mydisplay = createP("seed")
  mybutton.mousePressed(newSeed)
  translate(width/2,height/2)
  setBinnum();
  changeit();
}
function gochange(){
  binnum = input.value().trim()
  if (binnum.length == 9 && re.test(binnum)){
    let num = parseInt(binnum,2)
    mydisplay.html("Seed " +num +" : " +binnum)
    changeit();
  }else{
    input.value("error:")
  }

}
function newSeed() {
    setBinnum();
    changeit();
}

function setBinnum(){
  let num = floor(random(0,511)); // get random
  
  binnum = num.toString(2)
  binnum = "000000000".substring(binnum.length) + binnum
  print(num,binnum)
  mydisplay.html("Seed " +num +" : " +binnum);
  
}



function changeit(){
  background(230,200,0)
  
  sz = slider.value()
  //translate(width/2,height/2)
  drawShape(0, 0, sz)
  
}

 

function drawShape(x, y, d) {
  //rect(x, y, d);
  fill(0)
  
  if (sz < 5){
    noStroke()
  }else{
    stroke(230,200,0)
    strokeWeight(1)
  }
  rect(x,y,sz,sz)
  if (d < width/1.5) {
    let newD = d * 3;  // need to the steps
    if(binnum[0] == '1'){
      drawShape(x - d, y - d, newD); // top left
    }
    if(binnum[1] == '1'){
      drawShape(x , y -d, newD); // top middle
    }
    if(binnum[2] == '1'){
      drawShape(x +d , y - d, newD); // top right
    }
    if(binnum[3] == '1'){
      drawShape(x-d,y, newD); // left
    }
    if(binnum[4] == '1'){
      drawShape(x,y,newD);  //cente
    }
    if(binnum[5] == '1'){
      drawShape(x+d,y,newD); // right
    }
    if(binnum[6] == '1'){
      drawShape(x- d , y + d, newD); // bottom left
    }
    
    if(binnum[7] == '1'){
      drawShape(x, y +d, newD); // bottom middle
    }
    
    if(binnum[8] == '1'){
      drawShape(x + d, y + d, newD); // bottom right
    
    } 
  }  

}
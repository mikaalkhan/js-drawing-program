document.getElementById('drawing').innerHTML='';
const rows = 180
const columns = 240

for (let i = 0; i < 180; i++) {
  let rowDiv = document.createElement('div');
  rowDiv.classList.add('row');
  rowDiv.setAttribute('id', 'row' + i);
  drawing.appendChild(rowDiv)
  for (let j = 0; j < 240; j++) {
    let box = document.createElement('div');
    box.className = "pixel";
    box.setAttribute("id", `${i},${j}`)
    box.setAttribute("y",i)
    box.setAttribute("x",j)
    box.style.backGroundColor = 'white'
    rowDiv.appendChild(box)
    box.addEventListener("mouseover", changeColor);
    box.addEventListener("click", changeColor);
  }
}




function changeColor(event){
  if (event.type == "click" || (event.type === "mouseover" && event.buttons===1)) {
    let x = parseInt(event.target.getAttribute("x"));
    let y = parseInt(event.target.getAttribute("y"));
    console.log(x, y)

    event.target.style.backgroundColor = document.getElementById("colorchoice").value;

    
    document.getElementById(`${y-1},${x}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y-1},${x-1}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y-2},${x}`).style.backgroundColor=document.getElementById("colorchoice").value
    
    document.getElementById(`${y},${x-1}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y+1},${x-1}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y},${x-2}`).style.backgroundColor=document.getElementById("colorchoice").value
                
    document.getElementById(`${y},${x+1}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y+1},${x+1}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y},${x+2}`).style.backgroundColor=document.getElementById("colorchoice").value
    
    document.getElementById(`${y+1},${x}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y-1},${x+1}`).style.backgroundColor=document.getElementById("colorchoice").value
document.getElementById(`${y+2},${x}`).style.backgroundColor=document.getElementById("colorchoice").value

  }
}

function save(){
  html2canvas(document.getElementById("drawing"),{

    onrendered: function(canvas){
      //document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    }
  });
}


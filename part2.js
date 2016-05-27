function start(){

  // YOUR CODE HERE.. you can delete this line
}





/************************************/
/************* createDiv ************/
/************************************/
function createDiv(num){
  var div = document.createElement('div');
  div.classList.add('box');
  div.innerText = num;
  
  var n = Math.random();
  if(n > 0.66){
    div.style.backgroundColor = 'blue';
  }else if(n > 0.33){
    div.style.backgroundColor = 'green';
  } else {
    div.style.backgroundColor = 'black';
  }

  document.body.appendChild(div);
  return div;
}
var cartContent = document.getElementsByClassName('contain');
var itemsAdded = [];
var index;
for (var i = 0; i < cartContent.length; i++) {
  var cartItem = cartContent[i].childNodes[3].textContent
  localStorage.setItem(i,cartItem);
}

document.getElementById('cartCart').addEventListener("load",loadCount());

function loadCount(){
  var cartCount = document.getElementById('cartCart').textContent;
   t = parseInt(sessionStorage.length);
  document.getElementById('cartCart').textContent = t;
  index = parseInt(sessionStorage.length);
}




function add(x){
var item = x.parentNode.childNodes[3].textContent;

if(check(item)===false){
  for (var i = 0; i < cartContent.length; i++) {
      if(item == cartContent[i].childNodes[3].textContent){
        sessionStorage.setItem(index,item);
        index = sessionStorage.length;
        itemsAdded.push(item);
        break;
      }
  }
}
var cartCount = document.getElementById('cartCart').textContent;
 t = parseInt(sessionStorage.length);
document.getElementById('cartCart').textContent = t;



}

function check(item){
var count = 0;
for(i=0;i<itemsAdded.length;i++){
  if(item === itemsAdded[i]){
    count++;
  }
}

if(count==0){
  return false;
}
else{
  return true;
}


}

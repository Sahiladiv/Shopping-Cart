var cartContent = document.getElementsByClassName('contain');
itemsAdded = [];
for (var i = 0; i < cartContent.length; i++) {
  var cartItem = cartContent[i].childNodes[3].textContent
  localStorage.setItem(i,cartItem);
}



var index = 0;
function add(x){
  var item = x.parentNode.childNodes[3].textContent;


if(check(item)===false){
  for (var i = 0; i < cartContent.length; i++) {
      if(item == cartContent[i].childNodes[3].textContent){
        index = sessionStorage.length;
        sessionStorage.setItem(index,item);
        itemsAdded.push(item);
        console.log(sessionStorage.length)
        index = sessionStorage.length +1;
        break;
      }
  }
}


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

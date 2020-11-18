document.getElementById('searchButton').addEventListener('click',function(){
  var searchContent = document.getElementById('search').value;
  var contents = document.getElementsByClassName('itemName');
  for (var i = 0; i < contents.length; i++) {
    if(searchContent == contents[i].textContent){
      document.getElementById('bigContainer').style.display="none";
      create(i)
      break;
    }
  }
});

function create(i){

  var searchDiv = document.createElement("div");
  searchId = document.createAttribute("id");
  searchId.value = "searchedContainer"
  searchDiv.setAttributeNode(searchId)


  // var searchingContainer = document.getElementById('searchedContainer');
  // searchingContainer.style.display="block";
  var backButton = document.createElement("button");
  var backText = document.createTextNode("Back");

  var backId = document.createAttribute("id");
  backId.value="back"
  backButton.setAttributeNode(backId)
  backButton.appendChild(backText);
  backButton.className="myBackButton";

  backClick = document.createAttribute("onclick");
  backClick.value="back()";
  backButton.setAttributeNode(backClick)


  searchDiv.appendChild(backButton);

    var itemContents = document.getElementsByClassName('contain')[i];
    var cloneContents = itemContents.cloneNode(true);
    cloneContents.className = "myContain"
    searchDiv.appendChild(cloneContents);
    document.body.appendChild(searchDiv)

}

function back(){

  var t = document.getElementById('searchedContainer');
  t.remove();
    document.getElementById('bigContainer').style.display="grid";

document.getElementById('searchedContainer').style.display="none";
}















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

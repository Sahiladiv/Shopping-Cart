var items =[];
for (var i = 0; i < sessionStorage.length; i++) {
  items.push(sessionStorage.getItem(i));
}
document.body.addEventListener("load",add());

function add(){
var q = 1;
if(sessionStorage.length !=0){

  for(i=0;i<sessionStorage.length;i++){
      cartItem = items.pop();
      var cartBody = document.createElement("tbody");
      var itemClass = document.createAttribute("class");
      itemClass.value="newItem"
      cartBody.setAttributeNode(itemClass)

      var cartTemplate = document.createElement("tr");
      var cartColumn =  document.createElement("td");
      var quantityColumn =  document.createElement("td");
      var addColumn =  document.createElement("td");
      var removeColumn =  document.createElement("td");
      var costColumn =  document.createElement("td");
      var deleteRowColumn =  document.createElement("td");

      var cartNode = document.createTextNode(cartItem);
      var cartClass = document.createAttribute("class");
      cartClass.value="newcartItem"
      cartColumn.setAttributeNode(cartClass);
      cartColumn.appendChild(cartNode);

      var quantityNode = document.createTextNode(q);
      var quantityClass = document.createAttribute("class");
      quantityClass.value = "quantity";
      quantityColumn.setAttributeNode(quantityClass);
      quantityColumn.appendChild(quantityNode);

      var addcart = document.createElement("button");
      var addNode = document.createTextNode("+");
      addcart.appendChild(addNode);
      var addClick = document.createAttribute("onclick");
      addClick.value = "addItem(this)";
      addcart.setAttributeNode(addClick);
      addColumn.appendChild(addcart);

      var removecart = document.createElement("button");
      var removeNode = document.createTextNode("-");
      removecart.appendChild(removeNode);
      var removeClick = document.createAttribute("onclick");
      removeClick.value = "removecart(this)";
      removecart.setAttributeNode(removeClick);
      removeColumn.appendChild(removecart);

      var deleteButton = document.createElement("button");
      var buttonClass = document.createAttribute("class");
      buttonClass.value="removeItem";
      deleteButton.setAttributeNode(buttonClass);
      var click = document.createAttribute("onclick");
      click.value="cancel(this)";
      deleteButton.setAttributeNode(click);
      var deleteNode = document.createTextNode("Remove from cart");
      deleteButton.appendChild(deleteNode);
      deleteRowColumn.appendChild(deleteButton);

      var costAmount = document.createTextNode(100);
      var costClass = document.createAttribute("class");
      costClass.value = "cost";
      costColumn.appendChild(costAmount);
      costColumn.setAttributeNode(costClass);

      cartTemplate.appendChild(cartColumn);
      cartTemplate.appendChild(quantityColumn);
      cartTemplate.appendChild(addColumn);
      cartTemplate.appendChild(removeColumn);
      cartTemplate.appendChild(costColumn);
      cartTemplate.appendChild(deleteRowColumn);
      cartBody.appendChild(cartTemplate)

      var select = document.getElementById('plateTable');
      select.appendChild(cartBody)
    }

}

}

function cancel(x){
  var removeNode = x.parentNode.parentNode;
  var removeIndex = x.parentNode.parentNode.rowIndex;
  console.log(removeIndex)
  var removeItem = removeNode.childNodes[0].textContent;
  removeNode.remove();
  sessionStorage.removeItem(removeIndex)
}

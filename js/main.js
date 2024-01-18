let typeInput = document.getElementById("typeInput");
let nameInput = document.getElementById("nameInput");
let kindInput = document.getElementById("kindInput");
let countInput = document.getElementById("countInput");
let colorInput = document.getElementById("colorInput");
let priceInput = document.getElementById("priceInput");
let tableBody = document.getElementById("tableBody");
let dateInput = document.getElementById("dateInput");
let addBtn = document.getElementById("addBtn");
let updateBtn = document.getElementById("updateBtn");
let productContainer = [] ;
let updatedIndex  ;
if(localStorage.getItem("products") != null){
  productContainer =  JSON.parse(localStorage.getItem("products"))
  displayProducts(productContainer);
}


function addProduct(){

 if(typeInput.value!==""&&kindInput.value!==""&&countInput.value!=""&&colorInput.value!=""&&priceInput.value!==""&&nameInput.value!==""&& dateInput.value!==""){
  let product = {
    name : nameInput.value ,
    type : typeInput.value ,
    kind : kindInput.value ,
    count: countInput.value ,
    color : colorInput.value ,
    price : priceInput.value  ,
    date : dateInput.value 
  
  }

  productContainer.push(product);
  localStorage.setItem("products" , JSON.stringify(productContainer));
  clearForm();
  displayProducts(productContainer);
 }
else{
  alert("يسطا اكتب البايانات كلها ")
}
}

function clearForm (){
  nameInput.value="" ;
  typeInput.value="" ;
  kindInput.value="" ;
  countInput.value="" ;
  colorInput.value="" ;
  priceInput.value="" ;
  dateInput.value="" ;
}

function deleteProduct (index){
  productContainer.splice(index,1);
  localStorage.setItem("products" , JSON.stringify(productContainer));
  displayProducts(productContainer);

}

function setFormForUpdate(index){
  nameInput.value = productContainer[index].name ;
  typeInput.value = productContainer[index].type ;
  kindInput.value = productContainer[index].kind ;
  countInput.value = productContainer[index].count ;
  colorInput.value = productContainer[index].color ;
  priceInput.value = productContainer[index].price ;
  dateInput.value = productContainer[index].date ;
  updatedIndex = index ;
  addBtn.classList.add("d-none") ;
  updateBtn.classList.remove("d-none");

}

function updateProduct (){

  if(typeInput.value!==""&&kindInput.value!==""&&countInput.value!=""&&colorInput.value!=""&&priceInput.value!==""&&nameInput.value!=="" && dateInput.value!==""){

    productContainer[updatedIndex].name =  nameInput.value  ;
    productContainer[updatedIndex].type =  typeInput.value  ;
    productContainer[updatedIndex].kind = kindInput.value ;
    productContainer[updatedIndex].count = countInput.value ;
     productContainer[updatedIndex].color = colorInput.value  ;
     productContainer[updatedIndex].price = priceInput.value ;
     productContainer[updatedIndex].date = dateInput.value ;
     localStorage.setItem("products" , JSON.stringify(productContainer));
     displayProducts(productContainer);
     addBtn.classList.remove("d-none") ;
     updateBtn.classList.add("d-none");
     clearForm()

  }
  else{
    alert("يسطا اكتب البايانات كلها ")
  }


}
function displayProducts(list){
  let cartona = `` ;
  for(let i = 0  ; i < list.length ; i++){
    cartona+= `
    <tr>
    <td>${i+1}</td>
    <td>${list[i].name}</td>
    <td>${list[i].type}</td>
    <td>${list[i].price}</td>
    <td>${list[i].kind}</td>
    <td>${list[i].count}</td>
    <td>${list[i].color}</td>
    <td>${list[i].date}</td>
    <td><button onclick= "setFormForUpdate(${i})" class="btn btn-sm btn-outline-warning my-2">تعديل</button></td>
    <td><button onclick= "deleteProduct(${i})" class="btn  btn-sm btn-outline-danger my-2">مسح</button></td>
   </tr>
    
    `
  }
  tableBody.innerHTML = cartona ;
}

function searchProducts (searchTerm)
{
    let searchContainer = [];
    for (var i = 0 ; i<productContainer.length ; i++)
    {

if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()))
{
   searchContainer.push(productContainer[i]);
}

    } 


    displayProducts(searchContainer);

}

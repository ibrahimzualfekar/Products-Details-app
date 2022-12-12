

// var empolyee =
// {
//     name: 'nadia',
//     age: 30,
//     salary: 102392,
//     work: function () {
//         window.alert('nadia working')
//     },
//     child: {
//         name: 'ali',
//         age: 2,
//         walk: function () {
//             window.alert('ali walking')
//         }
//     }
// }



var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var searchInput = document.getElementById('searchInput');
var addBtn = document.getElementById('addBtn');
var inputs = document.getElementsByClassName('form-control');
var currentIndex=0;


var products = [];

if (JSON.parse(localStorage.getItem('productsList')) != null) {
    products = JSON.parse(localStorage.getItem('productsList'));
    displayData()
}
//localStorage.setItem('test','habmozo');
addBtn.onclick = function () {
    if (addBtn.innerHTML == 'add product') {  //add mode
        addProduct();
    }
    else {  //update mode
        updateProduct()
    }
    displayData();
    clearForm();
}
function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    products.push(product);
    localStorage.setItem('productsList', JSON.stringify(products))
}
function displayData() {
    var cartona = '';
    for (var i = 0; i < products.length; i++) {
        cartona += `<tr>
                <td class="text-center">${[i+1]}</td>
                <td class="text-center">${products[i].name}</td>
                <td class="text-center">${products[i].price}</td>
                <td class="text-center">${products[i].category}</td>
                <td class="text-center">${products[i].desc}</td>
                <td class="text-center"><button onclick="getProductInfo(${i})" class='btn btn-outline-warning'>update</button></td>
                <td class="text-center"><button onclick="deleteProduct(${i})" class='btn btn-outline-danger'>delete</button></td>
               </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayData();
    localStorage.setItem('productsList', JSON.stringify(products))
}
function clearForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}

searchInput.onkeyup = function () {
    var cartona = '';
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            cartona += `<tr>
            <td class="text-center">${[i+1]}</td>
            <td class="text-center">${products[i].name}</td>
            <td class="text-center">${products[i].price}</td>
            <td class="text-center">${products[i].category}</td>
            <td class="text-center">${products[i].desc}</td>
            <td class="text-center"><button onclick="getProductInfo(${i})" class='btn btn-outline-warning'>update</button></td>
            <td class="text-center"><button onclick="deleteProduct(${i})" class='btn btn-outline-danger'>delete</button></td>
        </tr>`
        }

    }
    document.getElementById('tableBody').innerHTML = cartona
}
function getProductInfo(index) {
    currentIndex=index;
    var currentProduct = products[index];
    productNameInput.value = currentProduct.name;
    productPriceInput.value = currentProduct.price;
    productCategoryInput.value = currentProduct.category;
    productDescInput.value = currentProduct.desc;
    addBtn.innerHTML = 'update product';

}
function updateProduct(){
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    products[currentIndex]=product;
    localStorage.setItem('productsList', JSON.stringify(products))
    addBtn.innerHTML = 'add product';
}

/////////validation//////////////////////
var nameAlert=document.getElementById('nameAlert');

productNameInput.onkeyup = function (){
    var nameRejex = /^[A-Z][a-z]{2,8}$/ ;
    if(nameRejex.test(productNameInput.value)) //valid
    {
        addBtn.removeAttribute('disabled');
        productNameInput.classList.add('is-valid');
        productNameInput.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    }
    else{   //not valid
        addBtn.disabled = true;
        productNameInput.classList.add('is-invalid');
        productNameInput.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
    }
}

///////////////////


var nameAlert2=document.getElementById('nameAlert2');

productPriceInput.onkeyup = function (){
    var nameRejex2 = /^[0-9.]{1,8}$/ ;
    if(nameRejex2.test(productPriceInput.value)) //valid
    {
        addBtn.removeAttribute('disabled');
        productPriceInput.classList.add('is-valid');
        productPriceInput.classList.remove('is-invalid');
        nameAlert2.classList.add('d-none');
    }
    else{   //not valid
        addBtn.disabled = true;
        productPriceInput.classList.add('is-invalid');
        productPriceInput.classList.remove('is-valid');
        nameAlert2.classList.remove('d-none');
    }
}

///////////////

var nameAlert3=document.getElementById('nameAlert3');

productCategoryInput.onkeyup = function (){
    var nameRejex3 = /^[a-z0-9\s]{2,20}$/ ;
    if(nameRejex3.test(productCategoryInput.value)) //valid
    {
        addBtn.removeAttribute('disabled');
        productCategoryInput.classList.add('is-valid');
        productCategoryInput.classList.remove('is-invalid');
        nameAlert3.classList.add('d-none');
    }
    else{   //not valid
        addBtn.disabled = true;
        productCategoryInput.classList.add('is-invalid');
        productCategoryInput.classList.remove('is-valid');
        nameAlert3.classList.remove('d-none');
    }
}

///////////////

var nameAlert4=document.getElementById('nameAlert4');

productDescInput.onkeyup = function (){
    var nameRejex4 = /^[a-z0-9\s]{5,100}$/ ;
    if(nameRejex4.test(productDescInput.value)) //valid
    {
        addBtn.removeAttribute('disabled');
        productDescInput.classList.add('is-valid');
        productDescInput.classList.remove('is-invalid');
        nameAlert4.classList.add('d-none');
    }
    else{   //not valid
        addBtn.disabled = true;
        productDescInput.classList.add('is-invalid');
        productDescInput.classList.remove('is-valid');
        nameAlert4.classList.remove('d-none');
    }
}
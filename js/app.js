'use strict'
let divEl=document.getElementById('continer');
let tableEl=document.createElement('table');
    divEl.appendChild(tableEl);
let foods=[];
let imgs=['pizza.jpg' ,'shawarma.jpg','thumbnail (1).jpg'];
let foodPrice=[];

function Foodlover(customerName,foodType){
    this.customerName=customerName;
    this.foodType=foodType;
     foodPrice=[];
    
    foods.push(this)

}

function getRandom() {
    return Math.random();
    foodPrice.push();
}

function settingItem(){
    let data=JSON.stringify(foods);
    localStorage.setItem('food',data)
}


function gettingItem(){
    let stringObj=localStorage.getItem('food');
    console.log(stringObj);
    console.log(typeof stringObj);

    let normalObj=JSON.parse(stringObj)
    if(normalObj !== null){
        normalObj=foods;
        render();
    }

}




function tableHead(){
    
    let tableBody=document.createElement('tr');
    tableEl.appendChild(tableBody);

    let thEl=document.createElement('th');
    tableBody.appendChild(thEl);
    thEl.textContent='Order Image'
    for(let j=0 ; j<foods.length ; j++){
        let td2El=document.createElement('td');
        trEl.appendChild(td2El);
        td2El.textContent=imgs;

    }

    let td3El=document.createElement('td');
    tableBody.appendChild(td3El);
    td3El.textContent='Order Details'

}


function render(){
    
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl=document.createElement('td');
    trEl.appendChild(tdEl)
    tdEl.textContent='';

    for(let i=0 ; i<foods.length ; i++){
        let td1=document.createElement('td');
        trEl.appendChild(td1)
        td1.textContent=`customerName:${customerName[i]}: ,foodType:${foodType[i]} , Food Price: ${foodPrice[i]}`
    }
    let td3El=document.createElement('td');
    trEl.appendChild(td3El)
    td3El.textContent=imgs;

}

function handleSubmit(event){
    event.preventDefault();
    let customerName=event.target.customerName.value;
    let foodType=event.target.foodType.value;
    new Foodlover(customerName,foodType);

    settingItem();
    render();
}

gettingItem();
myForm.addEventListener('submit',handleSubmit)
tableHead();
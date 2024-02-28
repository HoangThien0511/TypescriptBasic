//lesson20 
let age: number =15;
if(age>18){
    console.log("Toi da du tuoi")    
}
else {
    console.log("You can watch cartoon")
}


//lesson21 
const age1:number=25


switch (age1) {
    case 19:
    case 25:
        console.log('Da di lam')
        break;
    case 18:
        console.log('Chua du tuoi')
        break;
    default:
        console.log(">>>run default")

}

//lesson 22 
for (let i=0; i<10;i++){
    console.log(">> i= ",i)
}

//lesson23
let counter=0;

while(counter<5){
    console.log(counter);
    if(counter % 2 === 1) break;
    counter++;
}

while(true){

}

//lesson24 
let counter1:number=25;
do {
    console.log(counter1)
    if(counter1 % 2===0 ) break;
    counter1++
} while (counter1<30);


//lesson25 

let products= [
    {name:'phone',price:700},
    {name: 'tablet', price:900},
    {name:'laptop', price:1200}
];

let discount1=0;
let product= products[1]
switch(product.name){
    case 'phone':
        discount1 =5;
        break;
    case 'tablet':
        discount1 =10;
        break;
    case 'laptop':
        discount1 =15;
        break;
}
console.log(discount1);


//lesson26 
// for(let index=0;index<9;index++){
//     if(index%2 ===1) { continue;}
//     console.log(index)
// }

let index=9;
let count4=0;
do {
    index +=1;
    if(index%2)
        continue;
    count4 +=1;

}while(index<99);
console.log(count4);

//lesson27
//phai dinh nghia type
function sum(a:number,b:number) {
    return a+b;
}

//arrow function
const sum2= ()=> {

}



console.log(sum(6,9))
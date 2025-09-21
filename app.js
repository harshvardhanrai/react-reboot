 // FUNCTIONS 

 //REVISION QUESTIONS

// FAT ARROW FUNCTION

// let multiply = (a,b) => {
//   return a*b;
// };

// multiply(2,7);

// function getScores(...scores){
//   let total = 0;
//   scores.forEach(function(val){
//     total = total + val;
//   })
//   console.log(total);;
// }

// getScores(12,17,8,11);


// function checkAge(age){
//   if(age<18)
//     return("Not Eligible");
//   return("Eligible to vote");
// }

// console.log(checkAge(27));

// Discount Calculator Function -- IMPORTANT


// function discountCalculator(discount){

//   return function (price) {

//       return price - price*(discount/100);

//   };
// }

// let discounter = discountCalculator(10);
// console.log(discounter(400));

// ARRAYS 

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newarr = arr.reduce(function(accumulator, val){
//   return accumulator + val;
// }, 0);

// let fruits = ["Apple", "Banana"];
// fruits.pop();
// fruits.push("Kiwi");

// let obj = {
//   name:"harsh",
//   age: 25,
//   isEnrolled: true,
// };



// DOM - Document Object Model

// let lis = document.querySelector("ul");

// let li = document.createElement("li");
// li.textContent = ("New List Added");

// lis.appendChild(li);

// TASK 8

// let img = document.createElement("img");

// img.setAttribute("src", "https://images.unsplash.com/photo-1757323149137-99e56fa4bfea?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D");

// let div = document.querySelector("div");

// div.prepend(img);

//  TASK-10

let inp = document.querySelector("input");
let span =  document.querySelector("span");

inp.addEventListener("input", function(){
  span.textContent = inp.value.length;
})











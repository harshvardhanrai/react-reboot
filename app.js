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

//  SET TIMEOUT & SET INTERVAL

// setInterval(function(){
//   console.log("hello, what's up !")
// }, 2000);

// let division = document.querySelector("#glass-card");

//   let intv = setInterval(function(){
//   alert("The div has disappeared");
//   division.style.display = "none";
//     clearInterval(intv);
// }, 30000 / 100);

const users = [
  { name: "amisha rathore", pic: "https://images.unsplash.com/photo-1758183583798-b7038bca9272?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D", bio: "silent chaos in aloud world 💯🐕‍🦺 | not for everyone" },

{
  name: "Rahul Singh",
  pic: "https://images.unsplash.com/photo-1714737238439-6ab99e0bb1c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxjb2xvcmZ1bCUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDI%3D",
  bio: "quiet storms brew in loud hearts ⚡ | not everyone’s cup of tea"
},

{
  name: "Naina Verma",
  pic: "https://images.unsplash.com/photo-1658786403875-ef4086b78196?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxjb2xvcmZ1bCUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDI%3D",
  bio: "soft edges, sharp mind 🌿 | whisper when needed"
},

{
  name: "Jane",
  pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&auto=format&fit=crop&q=60",
  bio: "steady heartbeat in chaos 🔥 | misunderstood often"
},

{
  name: "Patrick Williams",
  pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=1600&auto=format&fit=crop&q=60",
  bio: "laughs in vowels, lives in consonants 🎶 | doesn’t always speak"
},

{
  name: "Gwen Stacy",
  pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&auto=format&fit=crop&q=60",
  bio: "midnight thinker 🌌 | voices in silence"
},

{
  name: "anya patel",
  pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&auto=format&fit=crop&q=60",
  bio: "smiles hide stories untold 🤫 | soft but fierce"
}
]

function showUsers(arr){
  arr.forEach(function(user){

    // Create main card container
const card = document.createElement('div');
card.className = 'card';

// Create and append the image
const img = document.createElement('img');
img.src = user.pic;
img.className = 'bg-img';
img.alt = '';
card.appendChild(img);

// Create and append the blurred layer
const blurredLayer = document.createElement('div');
blurredLayer.className = 'blurred-layer';
blurredLayer.style.backgroundImage = `url(${user.pic})`;
card.appendChild(blurredLayer);

// Create content container
const content = document.createElement('div');
content.className = 'content';

// Create and append h3
const heading = document.createElement('h3');
heading.textContent = user.name;
content.appendChild(heading);

// Create and append paragraph
const paragraph = document.createElement('p');
paragraph.textContent = user.bio;
content.appendChild(paragraph);

// Append content to card
card.appendChild(content);

// Finally, append the whole card to the body or a specific container
document.querySelector(".cards").appendChild(card);  // or replace with document.querySelector('.some-container').appendChild(card);


  })
}

showUsers(users);

let inp = document.querySelector("#inp");
inp.addEventListener("input", function(){
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML ="";
  showUsers(newUsers);
});

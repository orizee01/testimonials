const reviews = [
  {
    name: "Andrew",
    image: "img.andrew.jpeg",
    Text: "I teach people how to sell their book online. The less code.they neec the better. zapier eliminates the need for code literture from 45BC making it over 2000 years old.",
    writer: "Grace Garey",
  },
   {
    name: "sandy",
    image: "img.sandy.jpeg",
    Text:"Contrary to popular belief, lorem lpsum is not simply random text. it has root in a piece of classical latin literture from 45BC making it over 2000 years old.",
    writer: "Richard McClintock",
     
  },
   {
    name: "jessica",
    image: "img.jessica .jpeg",
    Text:"I teach people how to sell their book online. The less code.they neec the better. zapier eliminates the need for code literture from 45BC making it over 2000 years old.",
    writer: "Lawrence Watins",
   },
   {
    name: "David",
    image: "img.david.jpeg",
    Text:"Contrary to popular belief, lorem lpsum is not simply random text. it has root in a piece of classical latin literture from 45BC making it over 2000 years old.",
    writer: "Paul jarvis",
  },
  {
 name: "JOY",
    image: "img.joy.jpeg",
    Text:"I teach people how to sell their book online. The less code.they neec the better. zapier eliminates the need for code literture from 45BC making it over 2000 years old.",
    writer: "Ophelie Lechat",
  },
  
];


const img = document.getElementById("picture");
const author = document.getElementById("author");
const info = document.getElementById("info");
const writer = document.getElementById("writer");



const prevbtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");

//set  starting  item
let slide = 0;
  
//load initial item
window.addEventListener("DOMContentLoaded" , function () {
  showPerson(slide)  
});

//each person function
function showPerson(e) {
   const item = reviews[e];
  img.src = item.image;
 author.innerHTML= item.name;
 info.textContent = item.Text;
 writer.textContent = item.writer
}

nextbtn.addEventListener("click", function () { 
  slide++;
if (slide > reviews.length - 1) {
    slide = 0;
  }
  showPerson(slide);
});

prevbtn.addEventListener("click", function () {
  slide--;
  if (slide < 0) {
    slide = reviews.length - 1;
  }
  showPerson(slide);
});



















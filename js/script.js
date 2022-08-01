// //  Selecting all required element

// const wrapper = document.querySelector(".wrapper"),
// toast = wrapper.querySelector(".toast"),
// title = toast.querySelector("span"),
// wifiIcon = toast.querySelector(".icon"),
// subTitle = toast.querySelector("p"),
// closeIcon = toast.querySelector(".close-icon");

// // Ending of selectign element required

// window.onload = ()=>{
//     function ajax() {
//         let xhr = new XMLHttpRequest();  // creating new XML object
//         xhr.open("GET", "https://api.github.com/search/users", true);
//         xhr.send();
//         xhr.onload = function() {
//             if (xhr.status === 200) {
//     }
// }



var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||  document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


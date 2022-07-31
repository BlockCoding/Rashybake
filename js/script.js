//  Selecting all required element

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
wifiIcon = toast.querySelector(".icon"),
subTitle = toast.querySelector("p"),
closeIcon = toast.querySelector(".close-icon");

// Ending of selectign element required

window.onload = ()=>{
    function ajax() {
        let xhr = new XMLHttpRequest();  // creating new XML object
        xhr.open("GET", "https://api.github.com/search/users", true);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200) {
    }
}

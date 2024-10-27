const toggleIcon = document.querySelector(".ham-icon");

let isExpanded = false;
document.querySelector(".navbar-toggler").addEventListener("click", () => {
    if(!isExpanded){
        toggleIcon.src = "images/icon-close.svg";
        isExpanded = true;
    }else{
        toggleIcon.src = "images/icon-hamburger.svg"; 
        isExpanded = false;  
    }
})
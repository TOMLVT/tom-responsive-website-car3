'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});


//vo hieu hoa code
document.addEventListener("keydown", function (event){
  if (event.ctrlKey){
     event.preventDefault();
  }
  if(event.keyCode == 123){
     event.preventDefault();
  }
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Chặn hành động mặc định khi chuột phải được nhấp
  alert('Xin lỗi, chức năng này đã bị chặn!');
});
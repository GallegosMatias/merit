const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navbar ul');
const menu_item = document.querySelectorAll('.navbar ul a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});


// Header switches between transparent and color
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 250){
    header.style.backgroundColor = '#f13613';
  }else{
    header.style.backgroundColor = 'transparent';
  }
});

// Menu closes automatically after click
menu_item.forEach(item=>{
  item.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

document.getElementById("naty-item").onclick = function () {
  location.href = "portfolio.html#naty";
};

document.getElementById("drog-item").onclick = function () {
  location.href = "portfolio.html#drog";
};

document.getElementById("mate-item").onclick = function () {
  location.href = "portfolio.html#mate";
};

document.getElementById("qisma-item").onclick = function () {
  location.href = "portfolio.html#qisma";
};

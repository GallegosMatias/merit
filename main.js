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
    header.style.backgroundColor = 'rgba(241, 54, 19, 0.85)';
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
  location.href = "naty.html";
};

document.getElementById("drog-item").onclick = function () {
  location.href = "drog.html";
};

document.getElementById("mate-item").onclick = function () {
  location.href = "mate.html";
};

document.getElementById("qisma-item").onclick = function () {
  location.href = "qisma.html";
};

document.getElementById("bello-viajes-item").onclick = function () {
  location.href = "bellomundo-viajes.html";
};

document.getElementById("bello-bienestar-item").onclick = function () {
  location.href = "bellomundo-bienestar.html";
};

document.getElementById("argentinaselect-item").onclick = function () {
  location.href = "otros.html#argentinaselect";
};

document.getElementById("poursoi-item").onclick = function () {
  location.href = "otros.html#poursoi";
};

document.getElementById("comprasegura-item").onclick = function () {
  location.href = "otros.html#comprasegura";
};

document.getElementById("arbolultra-item").onclick = function () {
  location.href = "logos.html#arbolultra";
};

document.getElementById("lrd-item").onclick = function () {
  location.href = "logos.html#ramadorada";
};

document.getElementById("esbelta-item").onclick = function () {
  location.href = "otros.html#esbelta";
};
$(document).ready((function(){$(".owl-carousel").owlCarousel({items:1,loop:!0,center:!0})}));let more=document.getElementsByClassName("news__btn");for(let e=0;e<more.length;e++)more[e].addEventListener("click",(function(){this.classList.toggle("active");let e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));let btn=document.getElementsByClassName("offer__btn");for(let e=0;e<btn.length;e++)btn[e].addEventListener("click",(function(){this.classList.toggle("active");let e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));
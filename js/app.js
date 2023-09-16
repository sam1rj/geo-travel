const hamb = document.getElementById('hamb');
const menu = document.getElementsByTagName('label')[0]
const lang = document.getElementById('lang')
const langDiv = document.querySelector('#lang div')
const change = document.getElementById('change')
const menu_left = document.getElementById('menu-left')
const menu_right = document.getElementById('menu-right')
const html = document.getElementsByTagName('html')
const slide = document.getElementById('slide')
const header = document.getElementById('header')
const blue = document.querySelectorAll('.blue')
const lang_icon = document.getElementById('lang-icon')
const logo = document.getElementById('logo')

AOS.init();

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

window.addEventListener('scroll',slideHeader)
hamb.addEventListener('mouseover', hoverMenu)
hamb.addEventListener('mouseout', outMenu)
lang.addEventListener('mouseover',hoverLang)
lang.addEventListener('mouseout',hoverOut)
change.addEventListener('click',clickMenu)
slide.addEventListener('click',slidePage)




function slideHeader(){

    if(window.pageYOffset>50){
       blue.forEach(items => {items.style.color="#004191"; items.style.border="1px solid #004191"})
       menu.style.border="none";
       header.style.background="white";
       lang_icon.src="./images/lang-dark-logo.png"
       logo.src="images/geo_logo_big_dark.png";
       header.style.height="100px"
    }else{
      blue.forEach(items => {items.style.color="white"; items.style.border="1px solid white"})
      menu.style.border="none"
      header.style.background="none"
       lang_icon.src="./images/lang_logo.svg"
       logo.src="images/geo_logo.svg"
       header.style.height="150px"
    }

//     if(window.pageYOffset>300 || window.pageYOffset>400){
     

//    gsap.from('.sec', {opacity: 0, duration: 1, y:-50, ease: 'Power2.easeOut'})
//    gsap.from('img', {opacity:0, duration:1, y:30 } ) 
//      }
//  console.log(window.pageYOffset);
}



function clickMenu(){

if(menu_left.classList.length==1){
    menu_left.classList.add("menu-open-l")
    menu_right.classList.add("menu-open-r")
    html[0].style.overflow='hidden';
    menu_left.style.padding="0"
    menu_right.style.padding="0"
    menu.textContent= 'close'
    logo.style.visibility="hidden"
  
      blue.forEach(items => {items.style.color="white"; items.style.border="1px solid white"})
      menu.style.border="none"
      header.style.background="none"
       lang_icon.src="./images/lang_logo.svg"
       logo.src="images/geo_logo.svg"
    
  
   
}else if(menu_left.classList.length==2){
      menu_left.classList.remove("menu-open-l")
    menu_right.classList.remove("menu-open-r")
    html[0].style.overflow='visible'
    menu_left.style.padding="0 30% 0 0"
    menu_right.style.padding="0 0 0 30%"
    menu.textContent= 'open'
    logo.style.visibility="visible"

    if(window.pageYOffset>50){
         blue.forEach(items => {items.style.color="#004191"; items.style.border="1px solid #004191"})
    menu.style.border="none";
    header.style.background="white";
    lang_icon.src="./images/lang-dark-logo.png"
    logo.src="images/geo_logo_big_dark.png";
    }
   
 
}

    }
function hoverMenu(){
     
    if(menu_left.classList.length==1){
      menu.textContent= 'open'   
    }else if(menu_left.classList.length>1){
        menu.textContent= 'close' 
    }

}
function outMenu(){
    menu.innerHTML='menu'
}
function hoverLang(){
    langDiv.style.display = 'flex'
    langDiv.style.opacity = 1
    langDiv.style.background="white"
   langDiv.style.transition="0.5s"
}
function hoverOut(){
    langDiv.style.display = 'none'
    langDiv.style.opacity = 0
    langDiv.style.transition=" 0.5s"
    
    
}

function slidePage(){
    window.scroll({
        top: 650,
        left: 100,
        behavior: "smooth",
      });
}


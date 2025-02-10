let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})


      function sendToWhatsapp(){
         let number = "9007062180";
          
         let datei =document.getElementById('datei').value; 
         let dateo =document.getElementById('dateo').value; 
         let adult =document.getElementById('adult').value; 
         let child =document.getElementById('child').value; 
         let room =document.getElementById('room').value;
         
         var url = "https://wa.me/" + number + "?text="

         +"CheckIn :"+ datei+"%0a"
         +"CheckOut :"+ dateo+"%0a"
         +"Adult :"+ adult+"%0a"
         +"Child :"+ child+"%0a"
         +"Room :"+ room+"%0a";

         window.open(url,'_blank').focus();
      }
 

      function sendtoWhatsapp(){
         let number = "9007062180";
          
         let name =document.getElementById('name').value; 
         let email =document.getElementById('email').value; 
         let date1 =document.getElementById('date1').value; 
         let date2 =document.getElementById('date2').value; 
         let adults =document.getElementById('adults').value;
         let children =document.getElementById('children').value;
         let rooms =document.getElementById('rooms').value;
         let type =document.getElementById('type').value;
         
         var url = "https://wa.me/" + number + "?text="

         +"Name :"+ name+"%0a"
         +"Email :"+ email+"%0a"
         +"Check In :"+ date1+"%0a"
         +"Check Out :"+ date2+"%0a"
         +"Adults :"+ adults+"%0a"
         +"Children :"+ children+"%0a"
         +"Room :"+ rooms+"%0a"
         +"Room Type :"+ type+"%0a";
        

         window.open(url,'_blank').focus();
      }
 
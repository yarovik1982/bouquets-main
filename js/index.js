const burgerOpen = document.querySelector('.svg-burger')
const burgerClose = document.querySelector('.svg-cross')

const headerMobile =document.querySelector('.header__mobile')

function openHeaderMobile () {
   headerMobile.classList.add("active")
   if(headerMobile.classList.contains("active")){
      document.querySelector('.header__info').style.visiblity = "hidden"
      // document.querySelector('.hero__text').style.opacity = 0
   }
}

function closeHeaderMobile () {
   headerMobile.classList.remove("active")
}

burgerOpen.addEventListener("click", openHeaderMobile)

burgerClose.addEventListener("click", closeHeaderMobile)

console.log(headerMobile);

window.addEventListener("load", function() {
let timer1 = new timer(3600, ".catalog__wrapper_item_timeout")   

timer1.start();
let timer2 = new timer(7200, ".catalog__wrapper_item_timeout2") 
timer2.start();
let timer3 = new timer(10800, ".catalog__wrapper_item_timeout3") 
timer3.start();
let timer4 = new bts(1801, ".catalog__wrapper_corm_timeout") 
timer4.start();

let btnTimeout = document.querySelector(".button-timeout")
btnTimeout.addEventListener("click", function(){
    timer1.stop();
    btnTimeout.disabled = true
    btnTimeout.innerText = "Скидка ваша!"
})



let option = document.querySelectorAll(".catalog__wrapper_zerna_price_select_option")
let abs = document.querySelectorAll(".catalog__wrapper_corm_price_select_option")
console.log(abs)

option.forEach(function(e){
    e.addEventListener("click", function(event){
        option.forEach(function(e){
            e.classList.remove("catalog__wrapper_zerna_price_select_option_active")
        })
        if (event.target.classList.contains("catalog__wrapper_zerna_price_select_option")) {
            event.target.classList.add("catalog__wrapper_zerna_price_select_option_active")
        }
    })

})
abs.forEach(function(e){
    e.addEventListener("click", function(event){
        abs.forEach(function(e){
            e.classList.remove("catalog__wrapper_corm_price_select_option_active")
        })
        if (event.target.classList.contains("catalog__wrapper_corm_price_select_option")) {
            event.target.classList.add("catalog__wrapper_corm_price_select_option_active")
        }
    })

})
let cart = {
    corm523: 1,
    corm723: 5
}
window.addEventListener("click", function(event){
    if (event.target.classList.contains("corm-img")) {
        plusCart (event.target.dataset.id)
    }
})
function plusCart(id) {
    cart[id] ++
    renderCart()
}
function renderCart() {
    console.log(cart)
}
renderCart();

window.addEventListener("scroll", function(){
    if (scrollY > 700) {
        document.querySelector(".arrow").classList.add("arrow_active")
    } else {
        document.querySelector(".arrow").classList.remove("arrow_active")
    }
})

let btn = document.querySelector(".arrow")

btn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let modal = document.querySelector(".modal")
let time = setInterval(modalInterval, 2000)
function modalInterval() {
    modal.classList.add("modal_active")
    clearInterval(time)
}
let modalExit = document.querySelector(".modal__window_exit")
modalExit.addEventListener("click", function(){
    modal.classList.remove("modal_active")
})
})

class timer {
    constructor(number, selector) {
        this.i = number;
        this.res = document.querySelector(selector)
        let abs;
    }
    start() {
       this.abs = setInterval(() => {
            this.i--;
            if (this.i <= 0) {
                clearInterval(this.abs)
            }
            this.renderTimeout();
        }, 1000);
    }
    renderTimeout() {
        let h = parseInt(this.i / 3600);
        let hs = this.i % 3600;
        let m = parseInt(hs /  60);
        let s = hs % 60;
        this.res.innerHTML = "Акция закончится через:" + " " + `${h}:${m}:${s}`;
    }
    stop() {
        clearInterval(this.abs)
    }
}
class bts extends timer {
    renderTimeout() {
        let h = parseInt(this.i / 3600);
        let hs = this.i % 3600;
        let m = parseInt(hs /  60);
        let s = hs % 60;
        this.res.innerHTML = "У вас осталось:" + " " + `${h}:${m}:${s}`;
    }
}

let burger = document.querySelector(".header__burger")
burger.addEventListener("click", function(){
    document.querySelector(".header__burger_list").classList.toggle("header__burger_list_active")
    burger.classList.toggle("header__burger_active")
    document.querySelector(".header-logo").classList.toggle("header-logo_active")
    document.querySelector("body").classList.toggle("active")
})
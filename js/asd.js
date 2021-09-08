let burger = document.querySelector(".header__burger")
let burgerList = document.querySelector(".header__burger_list")
let body = document.querySelector('body')

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerList.classList.toggle("header__burger_list_active")
    body.classList.toggle("active")

})

let modal = document.querySelector(".modal__window")
let modalTimeout = setTimeout(modalWindow, 5000)
let modalTitlte = document.querySelector(".modal__title")
function modalWindow () {
    modal.classList.add("modal__window_active")
}
modalTitlte.addEventListener("click", function(){
    modal.classList.remove("modal__window_active")
})


let menu = document.querySelector(".header__item_menu")

menu.addEventListener("click", function(e){
    let link = e.target
    if (link.classList.contains("links"))
    {
        e.preventDefault()
        let target = document.querySelector(link.hash)
        let pos = target.offsetTop
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
})

let btn = document.querySelector(".arrow__up")
window.onscroll = () => {
    if (window.scrollY > 600) {
        btn.classList.remove("arrow__up_active")
    }  else {
        btn.classList.add("arrow__up_active")
    }
}

btn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
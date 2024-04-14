let menu = document.getElementById("menu")
let menuButton = document.getElementById("menu-button1")
let menuButton2 = document.getElementById("menu-button2")
let list = document.querySelectorAll("#menu li")
menuButton.addEventListener("click", (e) => {
    menu.style.display = "flex"
})
menuButton2.addEventListener("click", (e) => {
    menu.style.display = "none"
})

list.forEach((li) => {
    li.addEventListener("click", () =>{
        menu.style.display = "none"
    })
})

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY
    let menuKolor = document.getElementById("menu-kolormania")
    let button = document.querySelector("#menu-button1 svg")
    if (scroll >= 230){
        menuKolor.style.color = "black"
        button.setAttribute("fill", "black")
    }else{
        menuKolor.style.color = "#FFCC00"
        button.setAttribute("fill", "#FFCC00")
    }
})

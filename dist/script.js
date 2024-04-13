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

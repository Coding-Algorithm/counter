let minus = document.querySelector(".minus")
let add = document.querySelector(".add")
let display = document.querySelector(".display")
let reset = document.querySelector(".reset")



minus.addEventListener("click", ()=> {
  display.innerText -= 1;
})

add.addEventListener("click", ()=> {
  num = parseInt(display.innerText) + 1;
  display.innerText = num
})

reset.addEventListener("click", () => {
  display.innerText = 0;
})



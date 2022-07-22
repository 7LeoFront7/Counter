let box = document.querySelector('.box')
let minusBtn = document.querySelector('.minus')
let plusBtn = document.querySelector('.plus')

let num = 0;

plusBtn.addEventListener('click', function(){
    num++
    box.innerHTML = num
})

minusBtn.addEventListener('click', function(){
    num --
    box.innerHTML = num
})


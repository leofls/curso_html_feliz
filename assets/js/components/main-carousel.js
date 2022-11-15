// 
const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements")
let pixels = 0;
const pxl_desloca = 100;

btnRight.addEventListener('click', ()=>{
    elements.style = `transform: translateX(${pixels+=pxl_desloca}px);`;
})
btnLeft.addEventListener('click', ()=>{
    elements.style = `transform: translateX(${pixels-=pxl_desloca}px);`;
})
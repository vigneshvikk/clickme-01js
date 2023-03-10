const button=document.querySelector("button")
const body=document.querySelector("body")
const color=['red','green','brown','yellow','blue','#e21b5a','#c75233','#5e2f46','#83a300','#ffc6a5','#b9d7d9','#8ab8a8']

body.style.backgroundColor='violet'

button.addEventListener('click',changeBgcolor)

function changeBgcolor(){

    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}
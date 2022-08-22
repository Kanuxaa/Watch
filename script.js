const watch = document.getElementById('wt')
const second = document.getElementById('s')
const minute = document.getElementById('min')
const hour = document.getElementById('h')
const dot = document.getElementById('dot')
const line = document.getElementById('line')
const num = document.getElementById('num')

for (let i = 30; i<360; i+=30){
    let temp = dot.cloneNode(true)
    watch.appendChild(temp)
    temp.style.transform = `translate(-50%, -100%) rotate(${i}deg)`
}

for (let i = 6; i<360; i+=6){
    if(i%30==0){
        i+=6
    }
    let temp = line.cloneNode(true)
    watch.appendChild(temp)
    temp.style.transform = `translate(-50%, -100%) rotate(${i}deg)`
}

let count = 1

for (let i = 30; i<360; i+=30){
    let temp = num.cloneNode(true)
    watch.appendChild(temp)
    temp.children[0].innerHTML= `${count++}`
    temp.children[0].style.transform = `rotate(${-i}deg)`
    temp.style.transform = `translate(-50%, -100%) rotate(${i}deg)`
}

function set_time(){
    const time = new Date()
    const s = time.getSeconds()
    const m = time.getMinutes()
    let h = time.getHours()
    if (h>12){
        h -= 12
    }
    second.style.transform = `translate(-25%, -50%) rotate(${-90 + (s*6)}deg)`
    minute.style.transform = `translate(-25%, -50%) rotate(${-90 + (m*6 + s*0.1)}deg)`
    hour.style.transform = `translate(-25%, -50%) rotate(${-90 + (h*30 + m*0.5 + s*(0.5/60))}deg)`
}

window.setInterval(set_time, 1000);

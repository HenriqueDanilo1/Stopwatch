//objects
let h = document.getElementById('h')
let htoo = document.getElementById('htoo')
let m = document.getElementById('m')
let s = document.getElementById('s')
let ms = document.getElementById('ms')

//buttons
let bstart = document.getElementById('start-buttom')
let bstop = document.getElementById('stop-buttom')
let bresume = document.getElementById('resume-buttom')
let breset = document.getElementById('reset-buttom')

//stopwatch
let v = 0
function settimer(time){
        ms.innerHTML=((time % 100)).toString().padStart(2, "0")
        s.innerHTML=(Math.floor(time / 100) % 60).toString().padStart(2, "0")
        m.innerHTML=(Math.floor(time/6000) % 60).toString().padStart(2, "0")
        h.innerHTML=(Math.floor(time/360000)).toString().padStart(2, "0")
        if(time>359999){
            h.classList.remove('none')
            htoo.classList.remove('none')
        }
}

//f(buttom)
function fstart(){
    bstart.classList.add('none')
    bstop.classList.remove('none')
    timer = setInterval(() => {
        v+=1
        settimer(v)
    }, 10)
}

function fstop(){
    clearInterval(timer)
    bresume.classList.remove('none')
    breset.classList.remove('none')
    bstop.classList.add('none')
}

function fresume(){
    timer = setInterval(() => {
        v+=1
        settimer(v)
    }, 10)
    bresume.classList.add('none')
    bstop.classList.remove('none')
}

function freset(){
    clearInterval(timer)
    bstart.classList.remove('none')
    bresume.classList.add('none')
    bstop.classList.add('none')
    v = 0
    settimer(v)
    p.innerHTML=""
}

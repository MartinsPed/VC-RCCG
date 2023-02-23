const picSlide = document.querySelectorAll('.slide')
const auto = true
const intervalTime = 5000
let slideInterval
let worshipInterval


const nextSlide = () => {
    const current = document.querySelector('.current')
    

    current.classList.remove('current')
    

    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        picSlide[0].classList.add('current')
    }
    setTimeout(()=> {
        current.classList.remove('current')
    })    
}
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}


const worshipSlide = document.querySelectorAll('.worship')


const worshipSlider = () => {
    const current1 = document.querySelector('.current1')
    current1.classList.remove('current1')
    if(current1.nextElementSibling) {
        current1.nextElementSibling.classList.add('current1')
    } else{
        worshipSlide[0].classList.add('current1')
    }
    setTimeout(() => {
        current1.classList.remove('current1')
    })
}

if(auto) {
    worshipInterval = setInterval(worshipSlider, intervalTime)
}
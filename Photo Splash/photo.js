const slides = document.querySelectorAll('.slide')
const auto = true
const intervalTime = 2000
let slideInterval

const nextSlide = () => {
    const current = document.querySelector('.current')
    // Removes currecnt class from the already existing
    current.classList.remove('current')
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current class to next sibling
        current.nextElementSibling.classList.add('current')
    } else {
        // If theres no next element sibling, add current class to start
        slides[0].classList.add('current')
    }
    setTimeout(()=> {
        current.classList.remove('current')
    })
}

// Auto slide
if(auto) {
    // Run next slide @ interval time
    slideInterval = setInterval(nextSlide, intervalTime)
}
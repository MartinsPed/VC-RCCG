const slide = document.querySelectorAll('.slide-text > *')

anime({
    targets: slide,
    translateX: '-100%',
    duration: 12000,
    easing: 'linear',
    loop: true
})

new ResizeObserver(entries => {
    console.log(entries)
    if(entries[0].contentRect.width <= 767){
        navMenu.style.transition = "transfotm 0.3s ease"
    } else {
        navMenu.style.transition = "none"
    }
})
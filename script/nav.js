window.addEventListener("scroll", function () {
    let nav = document.querySelector('#navbar')
    navbar.classList.toggle('LinkDecoration', window.scrollY > 0)
})



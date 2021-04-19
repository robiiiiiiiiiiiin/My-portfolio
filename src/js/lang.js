// Handle languages buttons
document.querySelectorAll('.lang').forEach(elem => {
    elem.addEventListener('click', (evt) => {
        evt.preventDefault()
        localStorage.setItem('lang', evt.currentTarget.dataset.lang);

        window.location = evt.currentTarget.getAttribute('href')
    })
})
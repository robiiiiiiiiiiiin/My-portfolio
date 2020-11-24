$('.lang').on('click', (evt) => {
    evt.preventDefault()
    localStorage.setItem('lang', $(evt.currentTarget).data('lang'));

    window.location = $(evt.currentTarget).attr('href')
})
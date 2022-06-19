window.addEventListener('load', function () {
    const date = new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString();

    const dateHtml = document.querySelector('.header-date');
    dateHtml.innerHTML = date;
})
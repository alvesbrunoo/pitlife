var elementoduvida = document.querySelectorAll('.duvida')

elementoduvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})
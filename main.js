$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#cancelar').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const novaImg = $('#nova-img').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${novaImg}" />`).appendTo(novoItem)
        $(`<div class="overlay">
            <a href="${novaImg}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#nova-img').val('')
    })
})
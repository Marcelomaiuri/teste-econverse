$(document).ready(function () {

    $('#main-banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true
    });

    $('.melhores-marcas-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true
    });

    $('.comentarios-row').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true
    });

    $.ajax({
        url: 'http://localhost:8080/json/products-ninjasom.json',
        type: 'GET',
        dataType: 'json',
        headers: {
            'contentType': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        success: function (response) {
            console.log(response.length)
            for (var i = 0; i < response.length; i++) {
                var imgProduto = response[i].items[0].images[0].imageUrl,
                    nomeProduto = response[i].productName,
                    descricaoProduto = response[i].brand,
                    precoProduto = response[i].items[0].sellers[0].commertialOffer.Price

                var htmlPrateleira = `<div class="prateleira-col">
                    <img src="${imgProduto}" />
                    <h3 class="prateleira-titulo">${nomeProduto}</h3>
                    <p class="prateleira-descricao">${descricaoProduto}</p>
                    <p class="prateleira-preco">${precoProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>`;

                $(".prateleira-row, #Percussao, #Sopro, #Cordas, #Teclas").append(htmlPrateleira);

            }

            $('.prateleira-row').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: true
            });


        }
    });
});
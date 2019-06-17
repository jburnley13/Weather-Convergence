// Mudar o dia do layout dinamicamente

var dia = new Date();
diasem = dia.getDay();



switch (diasem) {

    case 0:
        $("#diaum").html("Dom");
        $("#diadois").html("Seg");
        $("#diatres").html("Ter");
        $("#diaquatro").html("Qua");
        break;
    case 1:
        $("#diaum").html("Seg");
        $("#diadois").html("Ter");
        $("#diatres").html("Qua");
        $("#diaquatro").html("Qui");
        break;

    case 2:
        $("#diaum").html("Ter");
        $("#diadois").html("Qua");
        $("#diatres").html("Qui");
        $("#diaquatro").html("Sex");
        break;

    case 3:
        $("#diaum").html("Qua");
        $("#diadois").html("Qui");
        $("#diatres").html("Sex");
        $("#diaquatro").html("Sab");
        break;

    case 4:
        $("#diaum").html("Qui");
        $("#diadois").html("Sex");
        $("#diatres").html("Sab");
        $("#diaquatro").html("Dom");
        break;

    case 5:
        $("#diaum").html("Sex");
        $("#diadois").html("Sab");
        $("#diatres").html("Dom");
        $("#diaquatro").html("Seg");
        break;

    case 6:
        $("#diaum").html("Sab");
        $("#diadois").html("Dom");
        $("#diatres").html("Seg");
        $("#diaquatro").html("Ter");
        break;

}



function main(valor) {


    $.ajax({
        url: "https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/" + valor + "/days/15?token=b5c6076248ae5807af801271fd9bf2ab",

    }).done(function(msg) {
        $("#maxter").html(msg.data[0].temperature.max);
        $("#minter").html(msg.data[0].temperature.min);
        $("#maxqua").html(msg.data[1].temperature.max);
        $("#minqua").html(msg.data[1].temperature.min);
        $("#maxqui").html(msg.data[2].temperature.max);
        $("#minqui").html(msg.data[2].temperature.min);
        $("#maxsex").html(msg.data[3].temperature.max);
        $("#minsex").html(msg.data[3].temperature.min);

    }).fail(function(jqXHR, textStatus, msg) {
        console.log("Error");
    });


}


$("#opcoes").change(function() {
    main($("#opcoes").val());

});
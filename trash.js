

$(document).ready(function () {
    chrome.storage.sync.get("email", function (itens) {
        if (itens.email) {
            $("#email-form").val(itens.email);
        }
    });
    $("#altera").click(function () {
        var email = $("#email-form").val();

        

        chrome.tabs.executeScript({
            code: '$("input[type=text]:not([name=cod])").val("Teste").focus()'
        });

        chrome.tabs.executeScript({
            code: '$("input[type=text].url, input[type=url]").val(location.href)'
        });

        
        chrome.tabs.executeScript({
            code: '$("input[type=text].data").val("' + dataAtualFormatada() + '")'
        });

        chrome.tabs.executeScript({
            code: '$("input[type=text].hora").val("12:00")'
        });

        chrome.tabs.executeScript({
            code: '$("input[type=number], input[type=text].sonumero").val("' + parseInt(Math.random() * 30) + '")'
        });

        chrome.tabs.executeScript({
            code: '$("input[type=text].cep").val("05444-000")'
        });

        chrome.tabs.executeScript({
            code: '$("input[type=tel], input[name=cel], input[type=tel], input[name=telefone], input.tel").val("(11) 1111-1111").focus()'
        });

        chrome.tabs.executeScript({
            code: '$("input[name=cel], input.cel").val("(11) 11111-1111").focus()'
        });

        chrome.tabs.executeScript({
            code: '$("select").each(function () { $(this).find("option:last").attr("selected", "selected") });'
        });

        chrome.tabs.executeScript({
            code: '$("input[name=Destinatario]").val("|' + email + '")'
        });
        chrome.tabs.executeScript({
            code: '$("input[name=email], input[name=Email], input[type=email]").val("' + email + '")'
        });

        chrome.tabs.executeScript({
            code: '$("textarea").val("Isso é uma mensagem de teste")'
        });
    });

    $("#email-form").change(function () {
        console.log("mudou")
        var theValue = $("#email-form").val();
        chrome.storage.sync.set({ 'email': theValue }, function () {
        });
    })

    function dataAtualFormatada() {
        var data = new Date();
        var dia = data.getDate();
        if (dia.toString().length == 1)
            dia = "0" + dia;
        var mes = data.getMonth() + 1;
        if (mes.toString().length == 1)
            mes = "0" + mes;
        var ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

});
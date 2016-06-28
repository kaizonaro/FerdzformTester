

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
            code: '$("input[type=text].url").val("http://misasi.com.br")'
        });
        
        chrome.tabs.executeScript({
            code: '$("input[type=tel], input[name=cel], input[type=tel], input[name=telefone]").val("(11) 1111-1111").focus()'
        });
       
        chrome.tabs.executeScript({
            code: '$("input[name=cel]").val("(11) 11111-1111").focus()'
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

});
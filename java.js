function Fomulario() {
    let nome = document.getElementById("nome").value;
    let nif = document.getElementById("nif").value;
    let dtnsc = document.getElementById("data de nascimento").value;
    let email = document.getElementById("endereço de email").value;
    let morada = document.getElementById("morada").value;
    let porta = document.getElementById("nº da porta").value;
    let local = document.getElementById("localidade").value;
    let pp = document.getElementById("palavra-passe").value;
    let confirm = document.getElementById("confirmação da palavra-passe").value;
    let regex_nif = /^[1-9]\d{8}$/;
    let regex_data = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    let regex_email = /^[^\s@]+@[^\s@]+\.[^\s@](2,)$/;

    if (nome.trim() == "") {
        alert("Inserir um nome valido");
        return false;
    }

    if (regex_nif.test(nif)) {
        alert("Inserir um nif valido");
        return false;
    }

    if (regex_data.test(dtnsc)) {
        alert("Inserir uma data de nascimento valida");
        return false;
    }

    if (email.trim() == "" || regex_email.test(email)) {
        alert("Inserir um email valido");
        return false;
    }

    if (porta < 1 || porta > 9999999) {
        alert("Inserira um nº de porta valido");
        return false;
    }

    if (local.trim() == "") {
        alert("Inserira uma localidade valida");
        return false;
    }

    if (pp.trim() == "" || pp.length < 8 || pp.length != confirm) {
        alert("Inserira uma palavra-passe valida");
        return false;
    }

}

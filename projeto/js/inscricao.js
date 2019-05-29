const form = document.querySelector("#formulario");
const email = document.querySelector("#email");
const nome = document.querySelector("#nome");
const txtPer = document.querySelector("#perso");
const rbManha = document.querySelector("#rbmanha");
const rbTarde = document.querySelector("#rbtarde");
const rbNoite = document.querySelector("#rbnoite");
const rbPerso = document.querySelector("#rbperso");
const ckIa = document.querySelector("#ckia");
const ckMachine = document.querySelector("#ckmachine");
const ckOutro = document.querySelector("#ckoutro");
const ckBig = document.querySelector("#ckbig");
const txtOutro = document.querySelector("#outro");
const mensagem = document.querySelector("#mensagem");


email.addEventListener("input", function () {
    chekEmail();
});

nome.addEventListener("input", function () {
    checkNome();
});
mensagem.addEventListener("input", function () {
    chekMensagem();
});


rbPerso.addEventListener("click", function () {
    txtPer.removeAttribute("disabled");
    txtPer.focus();

});
rbManha.addEventListener("click", function () {
    txtPer.setAttribute("disabled", true);

});
rbTarde.addEventListener("click", function () {
    txtPer.setAttribute("disabled", true);

});
rbNoite.addEventListener("click", function () {
    txtPer.setAttribute("disabled", true);

});


ckOutro.addEventListener("click", function () {
    if (txtOutro.hasAttribute("disabled")) {
        txtOutro.removeAttribute("disabled");
        txtOutro.focus();
    } else {
        txtOutro.setAttribute("disabled", true);
    }
});



function verificaRadio() {
    if (rbManha.checked || rbNoite.checked || rbTarde.checked || rbPerso.checked) {
        return true;
    } else {
        return false;
    }
}
function verificaCheckBox() {
    if (ckBig.checked || ckIa.checked || ckMachine.checked || ckOutro.checked) {
        return true;
    } else {
        return false;
    }
}

function chekMensagem() {
    if (mensagem.value.length > 140) {
        mensagem.classList.remove("erro-form")
        mensagem.classList.add("aceito-form");
    } else {
        mensagem.classList.add("erro-form")
        mensagem.classList.remove("aceito-form");
    }
}

function chekEmail() {
    email.classList.remove("erro-form")
    email.classList.remove("aceito-form");

    event.preventDefault();
    let confereEmail = validaEmail(email.value);
    if (confereEmail) {
        email.classList.add("aceito-form");
    } else {
        email.classList.add("erro-form");
    }
}

function checkNome() {
    nome.classList.remove("erro-form")
    nome.classList.remove("aceito-form");

    let confere = validaNome(nome);
    if (nome.value == "" || confere == false || nome.value.length <= 2) {
        nome.classList.add("erro-form");
    } else {
        nome.classList.add("aceito-form");
    }
}

function validaEmail(mail) {
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/); if (typeof (mail) == "string") { if (er.test(mail)) { return true; } } else if (typeof (mail) == "object") {
        if (er.test(mail.value)) {
            return true;
        }
    } else {
        return false;
    }
}

function validaNome(nome) {
    var er = new RegExp(/^([a-zA-Zà-úÀ-Ú]|\s+)+$/);
    if (er.test(nome.value)) {
        return true;
    }
    else {
        return false;
    }
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    chekEmail();
    checkNome();
    chekMensagem();

    if (nome.classList.contains("erro-form") || email.classList.contains("erro-form") || mensagem.classList.contains("erro-form")||
    verificaRadio() == false || verificaCheckBox() == false) {
        document.querySelector("#popup").classList.add("popup");
        return 
    }

    let enviar = criarJSON(form);
    document.querySelector("#popup").classList.add("popup");
    console.log(enviar);



});

function criarJSON(form) {

    let inter = "";
    let disp = "";
    if (ckOutro.checked) {
        if (inter == "") {
            inter = txtOutro.value
        } else {
            inter = inter + "," + txtOutro.value
        }
    }
    if (ckMachine.checked) {
        if (inter == "") {
            inter = ckMachine.value
        } else {
            inter = inter + "," + ckMachine.value
        }
    }
    if (ckBig.checked) {
        if (inter == "") {
            inter = ckBig.value
        } else {
            inter = inter + "," + ckBig.value
        }
    }
    if (ckIa.checked) {
        if (inter == "") {
            inter = ckIa.value
        } else {
            inter = inter + "," + ckIa.value
        }
    }

    if (rbManha.checked) {
        disp = rbManha.value
    }
    if (rbTarde.checked) {
        disp = rbTarde.value
    }
    if (rbNoite.checked) {
        disp = rbNoite.value
    }
    if (rbPerso.checked) {
        disp = txtPer.value
    }

    var inscrito = {
        nome: form.nome.value,
        email: form.email.value,
        disponibilidade: disp,
        interesse: inter,
        mensagem: form.mensagem.value
    }

    
    return inscrito;
}
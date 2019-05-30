const form = document.querySelector("#formulario");
const main = document.querySelector("#main");
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


rbPerso.addEventListener("change", function () {
    txtPer.removeAttribute("disabled");
    txtPer.focus();
    liberaSubmit();

});
rbManha.addEventListener("change", function () {
    txtPer.setAttribute("disabled", true);
    liberaSubmit();

});
rbTarde.addEventListener("change", function () {
    txtPer.setAttribute("disabled", true);
    liberaSubmit();
});
rbNoite.addEventListener("change", function () {
    txtPer.setAttribute("disabled", true);
    liberaSubmit();
});


ckOutro.addEventListener("change", function () {
    if (txtOutro.hasAttribute("disabled")) {
        txtOutro.removeAttribute("disabled");
        txtOutro.focus();
    } else {
        txtOutro.setAttribute("disabled", true);
    }
    liberaSubmit();
});
ckBig.addEventListener("change", function () {
    liberaSubmit();
});
ckIa.addEventListener("change", function () {
    liberaSubmit();
});
ckMachine.addEventListener("change", function () {
    liberaSubmit();
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
        liberaSubmit();

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

function liberaSubmit() {
    let bt = document.querySelector("#btsubmit");
    checkNome();
    chekEmail();
    if (nome.classList.contains("erro-form") || email.classList.contains("erro-form") || mensagem.classList.contains("erro-form") || mensagem.value == "" ||
        verificaRadio() == false || verificaCheckBox() == false) {
        console.log("nao esta pronto")
    } else {
        console.log("pronto")
        bt.removeAttribute("disabled");
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let enviar = criarJSON(form);
    insereDiv();
    console.log(enviar);
});

function insereDiv() {
    let main = document.querySelector("#main");
    let footer = document.querySelector("#footer");
    footer.classList.add("apos-popup");
    main.classList.add("apos-popup");
    let insc = "fazer outra inscrição";
    let cancelar = "sair";
    let parag = "Inscrição enviada. Aguarde novos detalhes em seu e-mail " + email.value;
    let div = document.querySelector("#popup");
    div.classList.add("popup");
    div.appendChild(criarParagrafo(parag));
    div.appendChild(criarLink(insc, "link-popup", "inscricao.html"));
    div.appendChild(criarLink(cancelar, "redir-popup", "index.html"));
}
function criarParagrafo(dado) {
    let p = document.createElement("p");
    p.classList.add("paragrafo-popup");
    p.textContent = dado;
    return p;
}
function criarLink(dado, classe, ref) {
    let link = document.createElement("a")
    link.setAttribute("href", ref);
    link.classList.add(classe);
    link.textContent = dado;
    return link;
}

function criarJSON(form) {

    let cont = 0;
    let interesse = [];
    let disponibilidade = "";
    if (ckOutro.checked) {
        interesse[cont] = txtOutro.value
        cont++;
    }
    if (ckMachine.checked) {
        interesse[cont] = ckMachine.value
        cont++;
    }
    if (ckBig.checked) {
        interesse[cont] = ckBig.value
        cont++;
    }
    if (ckIa.checked) {
        interesse[cont] = ckIa.value
        cont++;
    }

    if (rbManha.checked) {
        disponibilidade = rbManha.value
    }
    else if (rbTarde.checked) {
        disponibilidade = rbTarde.value
    }
    else if (rbNoite.checked) {
        disponibilidade = rbNoite.value
    }
    else if (rbPerso.checked) {
        disponibilidade = txtPer.value
    }

    var inscrito = {
        nome: form.nome.value,
        email: form.email.value,
        disponibilidade: disponibilidade,
        interesse: interesse,
        mensagem: form.mensagem.value
    }


    return inscrito;
}
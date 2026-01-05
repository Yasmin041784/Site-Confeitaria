var slideIndex = 0;
var timechange = 1500;      //Tempo em milisegundos
carrosel();

function carrosel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carrosel, timechange);
}



document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide de clientes
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Evento para o botão anterior
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Evento para o botão próximo
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Evento para os dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });

    showSlide(0);
});



document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('meuFormulario');

    // Bloquear letras nos campos NIF e Telemóvel
    const telemovelInput = document.getElementById('telemovel');
    const nifInput = document.getElementById('nif');

    telemovelInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
    });

    nifInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
    });

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        // Valida o formulário
        if (validarFormulario()) {
            // Se válido, envia
            enviarFormulario();
        }
    });
});

function validarFormulario() {
    // Limpar erros anteriores
    const erros = document.querySelectorAll('.erro-validacao');
    erros.forEach(erro => erro.remove());

    // Resetar bordas
    document.querySelectorAll('input').forEach(input => {
        input.style.borderColor = '#ddd';
    });

    // Validações
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const telemovel = document.getElementById('telemovel').value.trim();
    const nif = document.getElementById('nif').value.trim();
    const morada = document.getElementById('morada').value.trim();
    const checkboxesBolo = document.querySelectorAll('input[name="bolo"]:checked');

    // Regex 
    const regexNIF = /^[1-9]\d{8}$/;
    const regexTelemovel = /^\d{9,13}$/;

    let valido = true;
    let primeiroErro = null;

    // Validar nome
    if (nome === '' || nome.length < 2) {
        document.getElementById('nome').style.borderColor = 'red';
        primeiroErro = { elemento: 'nome', mensagem: 'Nome deve ter pelo menos 2 caracteres' };
        valido = false;
    }

    // Validar sobrenome
    if (sobrenome === '') {
        document.getElementById('sobrenome').style.borderColor = 'red';
        if (!primeiroErro) {
            primeiroErro = { elemento: 'sobrenome', mensagem: 'Por favor, insira seu sobrenome' };
        }
        valido = false;
    }

    // Validar telemovel
    if (telemovel === '' || !regexTelemovel.test(telemovel)) {
        document.getElementById('telemovel').style.borderColor = 'red';
        if (!primeiroErro) {
            primeiroErro = { elemento: 'telemovel', mensagem: 'Número de telemóvel inválido (9-13 dígitos)' };
        }
        valido = false;
    }

    // Validar Nif 
    if (nif !== '' && !regexNIF.test(nif)) {
        document.getElementById('nif').style.borderColor = 'red';
        if (!primeiroErro) {
            primeiroErro = { elemento: 'nif', mensagem: 'NIF inválido (9 dígitos)' };
        }
        valido = false;
    }

    // Validar morada
    if (morada === '') {
        document.getElementById('morada').style.borderColor = 'red';
        if (!primeiroErro) {
            primeiroErro = { elemento: 'morada', mensagem: 'Por favor, insira sua morada' };
        }
        valido = false;
    }

    // Validar checkboxes
    if (checkboxesBolo.length === 0) {
        if (!primeiroErro) {
            primeiroErro = { elemento: null, mensagem: 'Por favor, selecione pelo menos um bolo' };
        }
        valido = false;

        const pedidoSection = document.querySelector('.pedido-section');
        pedidoSection.style.border = '2px solid red';
        pedidoSection.style.padding = '10px';
        pedidoSection.style.borderRadius = '5px';
    } else {
        const pedidoSection = document.querySelector('.pedido-section');
        pedidoSection.style.border = 'none';
        pedidoSection.style.padding = '';
    }

    // Mostrar apenas um alerta como erro
    if (!valido && primeiroErro) {
        alert(primeiroErro.mensagem);
        if (primeiroErro.elemento) {
            document.getElementById(primeiroErro.elemento).focus();
        }
    }
    return valido;
}

function enviarFormulario() {
    const checkboxes = document.querySelectorAll('input[name="bolo"]:checked');
    const bolosSelecionados = Array.from(checkboxes).map(checkbox => checkbox.value);

    const dados = {
        nome: document.getElementById('nome').value.trim(),
        sobrenome: document.getElementById('sobrenome').value.trim(),
        telemovel: document.getElementById('telemovel').value.trim(),
        nif: document.getElementById('nif').value.trim(),
        morada: document.getElementById('morada').value.trim(),
        bolos: bolosSelecionados,
        observacao: document.getElementById('observacao').value.trim(),
        dataEnvio: new Date().toISOString()
    };
    console.log('Dados do formulário:', dados);
    alert('Formulário enviado com sucesso! Obrigado pelo seu pedido.');
    document.getElementById('meuFormulario').reset();
}
const formulario = document.getElementById('formulario');
const name = document.getElementById('name')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const tel = document.getElementById('tel')

formulario.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs()
})

function checkInputs() {
    const nameValue = name.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();

    if(nameValue === '') {
        setErrorFor(name, 'Ingrese su nombre');
    }else{
        setSuccesfor(name);
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'Ingrese su apellido');
    }else{
        setSuccesfor(lastname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Igrese su email');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Ingrese su email');
    }else{
        setSuccesfor(email);
    }
    if (telValue === '') {
        setErrorFor(tel, 'Ingrese su número');
    } else if (!isArgentinePhoneNumber(telValue)) {
        setErrorFor(tel, 'Ingrese un número valido');
    } else {
        setSuccessFor(tel);
    }
}

function setErrorFor(input, message) {
    const formularioControl = input.parentNode;
    const small = formularioControl.querySelector('small');  
    formularioControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccesfor(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    return /^((\+|00)54)?(9)?(11|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{6,}$/i.test(
        cleanedPhoneNumber
    );
}

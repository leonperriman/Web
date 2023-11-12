function validarCredencialesFacil(correo, password) {

    var listaUsuarios = [
        { email: 'abv@escupiteraoficial.es', password: 'SinEspecificar' },
        { email: 'agv@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'as@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'gkv@escupiteraoficial.es' , password: 'SinEspecificar'},
        { email: 'al@escupiteraoficial.es' , password: 'SinEspecificar'},
        { email: 'jt@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'mp@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'jf@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'rp@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'yb@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'sp@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'ja@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'ls@escupiteraoficial.es', password: 'SinEspecificar'},
        { email: 'dcv@escupiteraoficial.es', password: 'SinEspecificar'},
        ];

    for ( usuario in listaUsuarios) {
        if (usuario.email === correo && usuario.password === password) {
            return true;
        }  
    }

    if (correo === 'leonperriman@escupiteraoficial.es' && password === 'adminsecret') {
        return true;
    } else if (correo === 'abv@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'agv@escupiteraoficial.es' && password === 'SinEspecificar') {
       return true;
    } else if (correo === 'as@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'gkv@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'al@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'jt@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'mp@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'jf@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'rp@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'yb@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'sp@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'ja@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'ls@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'dcv@escupiteraoficial.es' && password === 'SinEspecificar') {
        return true;
    } else {
       alert('Usuario y contraseña incorrectos');
       return false;
    }
}

function ingresarFacil(correo) {
    if (correo === 'leonperriman@escupiteraoficial.es') {
        window.location.href ='admin.html';
    } else {
        window.location.href ='index.html';
        alert('Sesión iniciada correctamente')
    }
}

function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasenna = document.querySelector('#txtContrasenna').value;

    bAcceso = validarCredencialesFacil(sCorreo, sContrasenna);
    
    if(bAcceso == true){
        localStorage.setItem("usuario", sCorreo);
        ingresarFacil(sCorreo);
    }
}


var boton = document.getElementById('btnIngresar');
boton.addEventListener('click', iniciarSesion);

const formulario = document.querySelector('form');
const fname = document.getElementById ('fname');
const fapellido = document.getElementById('fapellido');
const fedad = document.getElementById('fedad');
const femail = document.getElementById('femail');
const text = document.querySelector('p');


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('fname').value
    console.log(name);
    let appell = document.getElementById('fapellido').value
    console.log(appell);
    let age = document.getElementById('fedad').value
    console.log(age);
    let mail = document.getElementById('femail').value
    console.log(mail);

    if(fname.value === "" || fapellido.value === "" || fedad.value === "" || femail.value === ""){
        text.textContent = 'Rellenar todos los campos'
    }else{
        alert(`El formulario fue enviado con éxito. Gracias ${fname.value}`);
    }
});


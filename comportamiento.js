const usuario = localStorage.getItem('usuario');
console.log(usuario)
const notas = window.Comportamiento[usuario];
document.getElementById('nombre').innerHTML = usuario

// console.log(localStorage.getItem('usuario'));

document.getElementById('n-l').innerHTML = notas['L']
document.getElementById('n-m').innerHTML = notas['M']
document.getElementById('n-x').innerHTML = notas['X']
document.getElementById('n-j').innerHTML = notas['J']
document.getElementById('n-v').innerHTML = notas['V']

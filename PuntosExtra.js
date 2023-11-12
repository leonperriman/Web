const usuario = localStorage.getItem('usuario');
//console.log(usuario)
const notas = window.ExtraPoint[usuario];
document.getElementById('nombre2').innerHTML = usuario

// console.log(localStorage.getItem('usuario'));

document.getElementById('col1').innerHTML = notas['1']
document.getElementById('col2').innerHTML = notas['2']
document.getElementById('col3').innerHTML = notas['3']
document.getElementById('col4').innerHTML = notas['4']
document.getElementById('col5').innerHTML = notas['5']
document.getElementById('col6').innerHTML = notas['6']


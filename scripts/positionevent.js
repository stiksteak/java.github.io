var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event) {
	sx.value = event.screenX;
	sy.value = event.screenX;
	px.value = event.pageX;
	py.value = event.pageY;
	cx.value = event.ClientX;
	cy.value = event.clientY;
}

var el + documetn.getElementById('body');
el.addEventListener('mousemove', showPosition, false);
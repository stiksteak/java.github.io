var greeting = 'Hiya its ';
var name = 'Darren';
var message = ', im here to contact you about your cars extended warranty.';
var welcomeMessage = greeting + name + message;

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;
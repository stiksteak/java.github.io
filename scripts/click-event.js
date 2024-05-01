var msg = '<div class=\"header\"><a id=\"close\" href="#">close x </a></div>';
msg +='<div><h3>TIPS FOR ADVENTURERS</h3>';
msg += 'You should broadside a mimic with rations, ';
msg += 'maybe they will be your friend.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
	document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);
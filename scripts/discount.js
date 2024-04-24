(function() {
	var chest = {
		name: 'Common Chest',
		Cost: 240,
		discount: 15,
		offerPrice: function() {
			var offerRate = this.Cost * ((100 - this.discount) / 100);
			return offerRate;
		}
	};
	
	var chestName, Cost, specialRate;
	chestName = document.getElementById('chestName');
	Cost = document.getElementById('Cost');
	specialRate = document.getElementById('specialRate');
	chestName.textContent = chest.name;
	Cost.textContent = '$' + chest.Cost.toFixed(2);
	specialRate.textContent = '$' + chest.offerPrice();
	var expiryMsg;
	var today;
	var elEnds;
	
	
	function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
	}
	
	today = new Date(4/16/2024);
	elEnds = document.getElementById('offerEnds');
	elEnds.innerHTML = offerExpires(today);
	
	
}());
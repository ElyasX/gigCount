var gigPure = 0,
tax = 0;

function doClick() {
        $("#result").css({transition: '0.3s', WebkitTransition : '0.3s'})

var gig = function(num) {
	var res = 0;	
		i = 0,
		result1 = 0,
		result2 = 0,
		result3 = 0;
	if(num <= 0) { return "Not Allowed !" }
	if(num <= 5) {
		res = num * 3600;
	} else if(num <= 10) {
		for(i = 1; i <= 5; i++) {
			result1 += 1 * 3600; 
		}
		for(i = 6; i <= num; i++) {
			result2 += 1 * 2600;
		} 
		res = result1 + result2;
	} else {
		for(i = 1; i <= 5; i++) {
			result1 += 1 * 3600;
		}
		for(i = 6; i <= 10; i++) {
			result2 += 1 * 2600;
		}
		for(i = 11; i <= num; i++){
			result3 += 1 * 1600;
		}
		 res = result1 + result2 + result3;
	}
	gigPure = res;
	tax = res * 0.08;
	res += tax;
	return res;
};


var val = document.getElementById('gig').value;
var testGig = gig(val);

if(testGig == "Not Allowed !") { 
	document.getElementById('result').innerHTML = "مجاز نیست !"; 
} else { 
	document.getElementById('result').innerHTML = "قیمت خالص گیگ (ها) : " + gigPure + "<br/>" + " [ 8 درصد مالیات : " + tax + " ] <br/>" + "قیمت : " + testGig + " تومان";
}

} // end doClick()

window.alert = function(title, message){
    var myElementToShow = document.getElementById("designed");
    myElementToShow.innerHTML = title + "</br>" + message; 
}

function designer() {
	alert("[Contact]","\nWork.ElyasX@gmail.com");
}


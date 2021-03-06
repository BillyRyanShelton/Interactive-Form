//text in focus when page loads
$(':text:visible:first').focus();


//JOB ROLE SECTION
//hide other job title input text field
$('#other-title').hide();

//if the user selects other from the job role drop down menu, the other job title input text is shown
$('#title').change(function() {
	if($('#title').val() === 'other') {
		$('#other-title').show();		
	} else {
		//if the user changes the job role from other, the other job title input text is hidden and cleared
		$('#other-title').hide();
		$('#other-title').val('');		
	}
});


//T-SHIRT INFO SECTION
//all the js pun shirts are given the class js puns
$('#color option[value="cornflowerblue"]').addClass('js puns');
$('#color option[value="darkslategrey"]').addClass('js puns');
$('#color option[value="gold"]').addClass('js puns');

//all the heart js shirts are given the class heart js
$('#color option[value="tomato"]').addClass('heart js');
$('#color option[value="steelblue"]').addClass('heart js');
$('#color option[value="dimgrey"]').addClass('heart js');

//all the t-shirt colors are hidden by default
$('#color option[class="js puns"]').hide();
$('#color option[class="heart js"]').hide();

//when the shirt design drop down menu is changed, only certain colors are displayed in the color drop down menu
$('#design').change(function() {
	//if the user chooses js pun theme, only js pun theme shirts are displayed in the color drop down menu
	if($('#design').val() === 'js puns') {
		//show all js pun shirts
		$('#color option[class="js puns"]').show();
		//hide all heart shirts
		$('#color option[class="heart js"]').hide();
		//hide select t-shirt option
		$('#color option[value="tshirttheme"]').hide();
	} //if the user chooses heart js theme, only heart js theme shirts are displayed in the color drop down menu 
	else if($('#design').val() === 'heart js') {
		//show all heart js shirts
		$('#color option[class="heart js"]').show();
		//hide all js pun shirts
		$('#color option[class="js puns"]').hide();		
		//hide select t-shirt option
		$('#color option[value="tshirttheme"]').hide();
	} //if the user chooses select theme, all shirts are displayed
	else {
		//show all shirts
		$('#color option[class="js puns"]').hide();
		$('#color option[class="heart js"]').hide();
		$('#color option[value="tshirttheme"]').show();
	}
});


//REGISTER FOR ACTIVITIES SECTION
let total = 0;
let totalText = '<p></p>';
$('.activities').append(totalText);
let boxesChecked = 0;

//function to check/uncheck a checkbox and add/remove from the total
function toggleSingleCheckbox(checkbox, cost) {
	$(checkbox).change(	function() { 
		//when the checkbox is checked, the total is updated
		if($(checkbox).is(':checked')) {
		total += cost;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
		boxesChecked++;
	} else{ 
		//when the checkbox is unchecked, the total is updated
		total -= cost;
		totalText = 'Total: $' + total;
		boxesChecked--;
		$('.activities p').text(totalText);
		if(total === 0) {
			$('.activities p').text('');
		}
	}});
}


//function to toggle between two checkboxes and update the total
function toggleTwoChecboxes(checkbox1, checkbox2) {
	$(checkbox1).change( function() { 
		//when checkbox1 is checked, checkbox2 is disabled
		if($(checkbox1).is(':checked')) {
		$(checkbox2).attr('disabled', true);
		total += 100;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
		boxesChecked++;
	} else{ 
		//when checkbox1 is unchecked, checkbox2 is enabled
		$(checkbox2).attr('disabled', false);
		total -= 100;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
		boxesChecked--;
		if(total === 0) {
			$('.activities p').text('');
		}
	}});
	$(checkbox2).change(	function() { 
		//when checkbox2 is checked, checkbox1 is disabled
		if($(checkbox2).is(':checked')) {
		$(checkbox1).attr('disabled', true);
		total += 100;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
		boxesChecked++;
	} else{ 
		//when checkbox2 is unchecked, checkbox1 is enabled
		$(checkbox1).attr('disabled', false);
		total -= 100;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
		boxesChecked--;
		if(total === 0) {
			$('.activities p').text('');
		}
	}});
}

let mainConf = '.activities [name="all"]'
toggleSingleCheckbox(mainConf, 200);

let framework =  '.activities [name="js-frameworks"]';
let express = '.activities [name="express"]';
toggleTwoChecboxes(framework, express);

let jsLibs =  '.activities [name="js-libs"]';
let node = '.activities [name="node"]';
toggleTwoChecboxes(jsLibs, node);

let buildTools = '.activities [name="build-tools"]'
toggleSingleCheckbox(buildTools, 100);

let npm = '.activities [name="npm"]'
toggleSingleCheckbox(npm, 100);


//PAYMENT INFO SECTION

//preload settings
$('#credit-card').show();
$('#paypal').hide();
$('#bitcoin').hide();

$('#payment').change(function() {
	//if the user chooses js pun theme, only js pun theme shirts are displayed in the color drop down menu
	if($('#payment').val() === 'credit card') {
		$('#credit-card').show();
		$('#paypal').hide();
		$('#bitcoin').hide();
	} 
	else if($('#payment').val() === 'paypal') {
		$('#credit-card').hide();
		$('#paypal').show();
		$('#bitcoin').hide();
	} 
	else {
		$('#credit-card').hide();
		$('#paypal').hide();
		$('#bitcoin').show();
	}
});




//FORM VALIDATION
function validation() {
	//name validation
	let isName = false;
	//if the name field is empty, the page is not submitted and the name border and title are highlighted red
	if($('#name').val() === '') {
		$('#name').css('border-color','#FF0901');
		$('label[for="name"]').css('color','#FF0901');
		isName = false;
	} //if the name field is filled, the name border and title are changed to the correct color
	else {
		$('#name').css('border-color','#c1deeb');
		$('label[for="name"]').css('color','#000');
		isName = true;
	}

	//email validation
	//email regex is created
	const EMAIL = /^[^\s]+@[^\s]+\.[a-z]+/;
	let userEmail = $('#mail').val();
	let isEmail = false;
	//if the email is a valid email address, the name border and title are changed to the correct color
	if(EMAIL.test(userEmail)) {
		$('#mail').css('border-color','#c1deeb');
		$('label[for="mail"]').css('color','#000');
		isEmail = true;
	} //if the email is invalid, the page is not submitted and the email border and title are highlighted red
	else {
		$('#mail').css('border-color','#FF0901');
		$('label[for="mail"]').css('color','#FF0901');
		isEmail = false;;
	}

	//activities registration validation
	//if at least one box is checked, the activity section is valid
	let isRegistered = false;
	if(boxesChecked > 0) {
		$('.activities legend').css('color','#000');
		isRegistered = true;
	} else {
		isRegistered = false;
		$('.activities legend').css('color','#FF0901');
	}

	//credit card validation
	//credit card regex is created
	const CREDITCARD = /\d\d\d\d\d\d\d\d\d\d\d\d\d[\d]?[\d]?[\d]?/;
	let userCC = $('#cc-num').val();
	let isCreditCard = false;
	//if the credit card is valid, the name border and title are changed to the correct color
	if(CREDITCARD.test(userCC) && $('#payment').val() === 'credit card') {
		$('#cc-num').css('border-color','#c1deeb');
		$('label[for="cc-num"]').css('color','#000');
		isCreditCard = true;
	} //if the credit card is invalid, the page is not submitted and the border and title are highlighted red
	else if ($('#payment').val() === 'credit card') {
		$('#cc-num').css('border-color','#FF0901');
		$('label[for="cc-num"]').css('color','#FF0901');
		isCreditCard = false;
	}
	//zip code validation
	const ZIPCODE = /\d\d\d\d\d/;
	let userZip = $('#zip').val();
	let isZipCode = false;
	//if the zip code is valid, the name border and title are changed to the correct color
	if(ZIPCODE.test(userZip) && $('#payment').val() === 'credit card') {
		$('#zip').css('border-color','#c1deeb');
		$('label[for="zip"]').css('color','#000');
		isZipCode = true;
	} //if the zip code is invalid, the page is not submitted and the border and title are highlighted red
	else if ($('#payment').val() === 'credit card') {
		$('#zip').css('border-color','#FF0901');
		$('label[for="zip"]').css('color','#FF0901');
		isZipCode = false;
	}
	//ccv validation
	const CCV = /\d\d\d/;
	let userCCV = $('#cvv').val();
	let isCCV = false;
	//if the cvv is valid, the name border and title are changed to the correct color
	if(CCV.test(userCCV) && $('#payment').val() === 'credit card') {
		$('#cvv').css('border-color','#c1deeb');
		$('label[for="cvv"]').css('color','#000');
		isCCV = true;
	} //if the cvv is invalid, the page is not submitted and the border and title are highlighted red
	else if($('#payment').val() === 'credit card') {
		$('#cvv').css('border-color','#FF0901');
		$('label[for="cvv"]').css('color','#FF0901');
		isCCV = false;
	}

	//the user must select a payment method, otherwise they cannot submit the form
	if($('#payment').val() === 'select_method') {
		$('.payment legend').css('color','#FF0901');
		} else {
		$('.payment legend').css('color','#000');	
		}
	
	//if all 6 form checks were valid the submit button submits
	if(isName === true && isEmail === true && isRegistered === true) {
		if($('#payment').val() != 'credit card' && $('#payment').val() != 'select_method') {
			return true;
		} else if($('#payment').val() === 'credit card' && isCreditCard === true && isZipCode === true && isCCV === true) {
			return true;
		} else {
			return false;
		}
			
	} else {
		return false;
	}
		
}
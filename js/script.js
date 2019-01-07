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

//when the shirt design drop down menu is changed, only certain colors are displayed in the color drop down menu
$('#design').change(function() {
	//if the user chooses js pun theme, only js pun theme shirts are displayed in the color drop down menu
	if($('#design').val() === 'js puns') {
		//show all js pun shirts
		$('#color option[class="js puns"]').show();
		//hide all heart shirts
		$('#color option[class="heart js"]').hide();
	} //if the user chooses heart js theme, only heart js theme shirts are displayed in the color drop down menu 
	else if($('#design').val() === 'heart js') {
		//show all heart js shirts
		$('#color option[class="heart js"]').show();
		//hide all js pun shirts
		$('#color option[class="js puns"]').hide();		
	} //if the user chooses select theme, all shirts are displayed
	else {
		//show all shirts
		$('#color option[class="js puns"]').show();
		$('#color option[class="heart js"]').show();
	}
});


//REGISTER FOR ACTIVITIES SECTION
let total = 0;
let totalText = '<p></p>';
$('.activities').append(totalText);

//function to check/uncheck a checkbox and add/remove from the total
function toggleSingleCheckbox(checkbox, cost) {
	$(checkbox).change(	function() { 
		//when the checkbox is checked, the total is updated
		if($(checkbox).is(':checked')) {
		total += cost;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
	} else{ 
		//when the checkbox is unchecked, the total is updated
		total -= cost;
		totalText = 'Total: $' + total;
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
	} else{ 
		//when checkbox1 is unchecked, checkbox2 is enabled
		$(checkbox2).attr('disabled', false);
		total -= 100;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
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
	} else{ 
		//when checkbox2 is unchecked, checkbox1 is enabled
		$(checkbox1).attr('disabled', false);
		total -= 100;
		totalText = 'Total: $' + total;
		$('.activities p').text(totalText);
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
	let condition = true;
	//name validation
	//if the name field is empty, the page is not submitted and the name border and title are highlighted red
	if($('#name').val() === '') {
		$('#name').css('border-color','#FF0901');
		$('label[for="name"]').css('color','#FF0901');
		condition = false;
	} //if the name field is filled, the name border and title are changed to their originial color
	else {
		$('#name').css('border-color','#c1deeb');
		$('label[for="name"]').css('color','#000');
	}

	//email validation
	//email regex is created
	const EMAIL = /^[^\s]+@[^\s]+\.[a-z]+/;

	let userEmail = $('#mail').val();
	if(EMAIL.test(userEmail)) {
		$('#mail').css('border-color','#c1deeb');
		$('label[for="mail"]').css('color','#000');
	} 
	else {
		$('#mail').css('border-color','#FF0901');
		$('label[for="mail"]').css('color','#FF0901');
		condition = false;
	}

	return condition;
}
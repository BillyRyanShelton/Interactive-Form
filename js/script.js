//the first text input is put in focus when the page
$(':text:visible:first').focus();

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
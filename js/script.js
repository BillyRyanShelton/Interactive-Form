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
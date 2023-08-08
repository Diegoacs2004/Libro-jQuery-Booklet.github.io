$(document).ready(function(){
	$("#libro").booklet({

		width:700,
		height: 550,
		closed: 1,
		covers: true,
		hoverWidth:100,
		pagePadding: 0,
		auto:1,
		delay: 0,
	});

	$('#anterior').click(function(){
		$('#libro').booklet("prev")
	})
	$('#siguiente').click(function(){
		$('#libro').booklet("next")
	})
	$('#boton').click(function(){
			$('#libro').booklet("gotopage", $('#campo').val());
		})

});
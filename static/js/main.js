$(document).ready(function(){
	$( "a.item" ).on( "click", function() {
		if(!$(this).hasClass('dropdown')) {
		    $(this)
		      .addClass('active')
		      .siblings('.item')
		        .removeClass('active');
		}
		var nomeForm=$(this)[0].id;
		console.log(nomeForm);
		$('div.formulario#formulario'+nomeForm).show(500)
			.siblings('div.formulario')
			 .hide();
	}); 

	$('div.formulario').each(function(index){
		$(this).hide();
	});
});

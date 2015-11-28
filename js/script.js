(function($) {

	var bring_nav= function() {
		$('.content').toggleClass('content__move');
		$('nav').toggleClass('nav__move');
	};

	var go_to_section= function() {
		var id= $(this).attr('class');
		$('section').removeClass('section__open');
		$('section#'+id).addClass('section__open');
		bring_nav();
	};

	$(document).ready(function() {
		$('.toggle').on('click',bring_nav);
		$('nav').find('button').on('click',go_to_section);
	});
})(jQuery);
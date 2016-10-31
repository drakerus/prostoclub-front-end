$(document).ready(function(){
	$(".slider_com").bxSlider();
  $(".main_slider").bxSlider();
	
	$('.search-filter .button').click(function() {
            $('.search-filter').toggleClass('is-active');
            $('.search-filter .button').removeClass('is-select');
            if ($('.search-filter').hasClass('is-active')) $('.search-filter .button').click(function() {
                $(this).addClass('is-select');
                $('#search').focus();
            });
    });
	
	
    $(".cb-enable").click(function(){
        var parent = $(this).parents('.switchsex');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', true);
    });
    $(".cb-disable").click(function(){
        var parent = $(this).parents('.switchsex');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', false);
    });
	$(".select_price .sel_l").click(function(){
		$(".select_price .sel_l").removeClass("active");
        $(this).addClass("active");
    });
  
	$(".menu_button_bl").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
	
	$( "#m-menu-btn" ).click(function(e) {
		e.preventDefault();
	  	$("#line-nav").slideToggle();
	});
	
	$( "#m-filter-btn" ).click(function(e) {
		e.preventDefault();
	  	$(".filter_nn").slideToggle();
	});
	
	$( ".open_form_search" ).click(function(e) {
		e.preventDefault();
	  	$(".search_big_form").slideToggle();
	});
	
	$('select').selectbox();
	
	document.getElementById("customButton").addEventListener("click", function(){
	  document.getElementById("fileUpload").click();  // trigger the click of actual file upload button
	});
	
	document.getElementById("fileUpload").addEventListener("change", function(){
	  var fullPath = document.getElementById('fileUpload').value;
	  var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
	  document.getElementById("fileName").innerHTML = fileName;  // display the file name
	}, false);
	
	var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}

	

  
  
  
});
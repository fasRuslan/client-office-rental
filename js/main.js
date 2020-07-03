window.addEventListener('DOMContentLoaded', () => {

	$('.slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});


	// Доработка слайдера при наведении
	let slider = document.querySelectorAll('.slider__item')

	let sliderDescription = document.querySelectorAll('.slide__description');

	for (let i = 0; i < slider.length; i++) {
		slider[i].addEventListener('mouseenter', changeColorDescription);

		function changeColorDescription() {

			this.children[0].style.width = '110%';

			this.children[0].style.zIndex = '2';

			let div = this.children[1];

			div.style.backgroundColor = 'rgba(36,145,225,0.5)';

			for (let y = 0; y < div.children.length; y++) {

				div.children[y].style.color = 'white';
				div.children[y].style.letterSpacing = '2px';
				div.children[y].style.fontWeight = 'bold';
			}
			this.removeEventListener('mouseenter', changeColorDescription);
			this.addEventListener('mouseleave', returnColorDescription);
		}

	}

	function returnColorDescription() {

		this.children[0].style.width = '100%';

		let div = this.children[1];

		div.style.backgroundColor = 'rgba(57, 63, 78, 0.5)';

		for (let y = 0; y < div.children.length; y++) {

			div.children[y].style.color = 'rgba(179, 179, 181, 0.5)';
			div.children[y].style.letterSpacing = '0px';
			div.children[y].style.fontWeight = 'normal';
		}
		this.addEventListener('mouseenter', changeColorDescription);
		this.removeEventListener('mouseleave', returnColorDescription);
	}

	//Прокрутка к секциям

	$(function () {
		$('a[data-target^=anchor]').bind('click.smoothscroll', function () {
			let target = $(this).attr('href'),
				bl_top = $(target).offset().top;
			$('body,  html').animate({
				scrollTop: bl_top
			}, 700);
			return false;
		})
	});
});
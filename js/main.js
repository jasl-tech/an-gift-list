; (function () {
	const giftList = [
		'Abridor de Latas',
		'Abridor de Garrafas',
		'Afiador de Facas',
		'Assadeira p/m/Pudim',
		'Avental',
		'Coador de Café',
		'Jogo de Colher de Silicone',
		'Jogo de Colheres de pau',
		'Copo medidor',
		'Cortador de pizza',
		'Descanso de Copo e Panela',
		'Descascador de Legumes',
		'Garrafa de Café',
		'Jarra de suco',
		'Escorredor de Arroz e Macarrão',
		'Escorredor de Louças',
		'Espremedor de Frutas',
		'Jogo de Panelas Deflon ou Ferro',
		'Jogo de Copos',
		'Jogo de talheres',
		'Jogo de Xicaras',
		'Jogo de taças',
		'Jogo de Potes(Vidro e Tampa de Bambu)',
		'Jogo de pratos',
		'Jogo de Vasilhas',
		'Pano de Prato',
		'Triturador de Tempero',
		'Lixeira de Cozinha',
		'Porta talheres organizador',
		'Liquidificador',
		'Frigideira',
		'Panela de Pressão',
		'Batedeira',
		'Moedor de pimenta',
		'Jogo de Faca de Corte',
		'Pipoqueira Elétrica',
		'Lixeira de Cozinha',
		'Pano de Prato',
		'Rodo de Pia',
		'Sanduicheira',
		'Jogo para Churrasco (Tábua, Faca)',
		'Jogo e Almofadas para cama',
		'Cabides',
		'Coberta',
		'Jogo de Cama',
		'Lençol',
		'Protetor de Colchão',
		'Protetor de Travesseiro',
		'Almofada de sofá Cinza ou Amarelo',
		'Descanso de bandeja para sofá',
		'Cesto de Roupa tom neutro (Retangular de banheiro)',
		'Ventilador',
		'Balde de plástico',
		'Tapete de sala com pequeno',
		'Escova para vaso Sanitário',
		'Lixeira',
		'Porta escova de dentes',
		'Jogo Sabonete/ Jogo dde acessórios para banheiro',
		'Toalha de banho',
		'Toalha de mão',
		'Toalha de Rosto',
		'Medidor de produto de limpeza',
		'Pano de Chão',
		'Escova de lavagens de roupas',
		'Kit 2 Suporte porta Shampoo e Sabonete',
		'Forma de Gelo',
	]

	'use strict';

	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-fh5co-nav-toggle').removeClass('active');
				}
			}
		});

	};


	var offcanvasMenu = function () {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-fh5co-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
			var $this = $(this);


			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function () {
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};

	// Loading page
	var loaderPage = function () {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#fh5co-counter').length > 0) {
			$('#fh5co-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};

	var mountList = function () {
		giftList.sort();
		const giftListElement = document.getElementById('gift-list');
		giftListElement.innerHTML = '';

		giftList.forEach(gift => {
			const giftItem = document.createElement('li');
            giftItem.classList.add('gift-item');
            giftItem.classList.add('col-sm-12');
            giftItem.classList.add('col-md-6');

            // Disable checkbox if the gift is already selected
            giftItem.innerHTML = `<span>${gift}</span>`;
            giftListElement.appendChild(giftItem);
		})

	};


	$(function () {
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		mountList();
	});


}());
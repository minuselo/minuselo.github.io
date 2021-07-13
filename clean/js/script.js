
// меню
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}


// спойлеры
let titles = document.querySelectorAll('.navigation__title');
titles.forEach(titles => titles.addEventListener("click", function (e) {
	this.classList.toggle('closed');
}))

// слайдер
new Swiper('.page-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});

new Swiper('.prod-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


// Модальное окно
MicroModal.init();
// Script slide
document.addEventListener("DOMContentLoaded", function () {
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');

	next.addEventListener('click', function () {
		let items = document.querySelectorAll('.item')
		document.querySelector('.slide').appendChild(items[0]);
	});

	prev.addEventListener('click', function () {
		let items = document.querySelectorAll('.item')
		document.querySelector('.slide').prepend(items[items.length - 1]);
	});
});

// Script menu full
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector('.menu-bar').addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector('#menuaberto').classList.toggle('close');
	});
})

document.querySelector('header').addEventListener('scroll', function(e){
	e.preventDefault();
	document.querySelector('.header-slide-menu').classList.toggle('show');
})

// remove dragstart
document.querySelectorAll('a, img').forEach(drag => {
	drag.addEventListener('dragstart', function(e){
		e.preventDefault();
	});
});

// Script menu lang
document.querySelector('.lang-txt').addEventListener('mouseover', function(e){
	e.preventDefault();
	document.querySelector('#menuaberto-lang').classList.toggle('close')
});
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

window.addEventListener('scroll', function(e){
	e.preventDefault();

	const scrollY = window.scrollY;
	if (scrollY > 50){
		document.querySelector('.header-slide-menu').classList.add('show');
	}
	else if (scrollY < (scrollY-1)){
		document.querySelector('.header-slide-menu').classList.remove('show');
	}
	console.log(scrollY)
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
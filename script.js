$(document).ready(function () {
	// Script slide
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');

	next.addEventListener('click', function () {
		let items = document.querySelectorAll('.item')
		document.querySelector('.slide').appendChild(items[0]);
	})

	prev.addEventListener('click', function () {
		let items = document.querySelectorAll('.item')
		document.querySelector('.slide').prepend(items[items.length - 1]);
	})

	// Script menu full
	var menuaberto = document.getElementById('menuaberto');

	document.getElementById('menu').addEventListener('click', function () {
		console.log(menuaberto.style)
		if (menuaberto.style.display === '' || menuaberto.style.display === 'none')
			menuaberto.style.display = 'block';
	})
})
document.addEventListener("DOMContentLoaded", function () {
	// Script slide
	/* let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');

	next.addEventListener('click', function () {
		let items = document.querySelectorAll('.item')
		document.querySelector('.slide').appendChild(items[0]);
	})

	prev.addEventListener('click', function () {
		let items = document.querySelectorAll('.item')
		document.querySelector('.slide').prepend(items[items.length - 1]);
	}) */

	// Script menu full
	document.querySelector('.menu-bar').addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector('#menuaberto').classList.toggle('close');
	})
})
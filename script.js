'use strict'

function neww() {
	for (let item of itemsDefault) {
		document.querySelector('.catalog-items').append(item);
	}
}

function popular() {
	items.sort((itemA, itemB) => itemA.dataset.sales - itemB.dataset.sales);

	for (let item of items) {
		document.querySelector('.catalog-items').append(item);
	}
}
function topPicks() {
	items.sort((itemA, itemB) => itemA.dataset.sales - itemB.dataset.sales);
	items.reverse();
	for (let item of items) {
		document.querySelector('.catalog-items').append(item);
	}
}


let items = Array.from(document.querySelectorAll('.catalog-item'));
let itemsDefault = Array.from(document.querySelectorAll('.catalog-item'));
let menu = document.querySelectorAll('.catalog-menu-link');

for(let item of menu) {
	item.onclick = function () {
		return false;
	}
}

document.querySelector('.catalog-menu').onclick = function(event) {
	let target = event.target;
	let dataSort = target.dataset.sort;
	if (!dataSort) return;
	
	for (let link of menu) {
		link.classList.remove('active');
	}

	target.classList.add('active');

	switch (dataSort) {
		case 'new':
		neww();
		break;
		case 'popular':
		popular();
		break;
		case 'topPicks':
		topPicks();
		break;
	}
}



let reviews = Array.from(document.querySelectorAll('.review-item'));
document.querySelector('.reviews').onclick = function(event) {
	let target = event.target.closest('.review-item');
	if (!target) return;
	
	for (let i=0; i < reviews.length; i++) {
		if (reviews[i] == target) {
			reviews.splice(i, 1);
		}
	}
	let copy = reviews[1];
	reviews[1] = target;
	reviews.push(copy);
	let id = Array.from(document.querySelectorAll('.review-item'))[1].dataset.target;
	document.querySelector(id).hidden = true;
	document.querySelector(target.dataset.target).hidden = false;

	for (let item of reviews) {
		document.querySelector('.reviews-items').append(item
			);
	}
}


window.addEventListener('load', function(){

	let createSlider = new Slider(".gallery-1", 3000)
	let s2 = new Slider(".gallery-2")
	setInterval(function() {
		createSlider.next();
	}, 3000);
	setInterval(function() {
		s2.prev();
	}, 3000);
});
class Slider {
	constructor(selector, interval) {
	this.root = document.querySelector(selector)
	this.btnPrev = this.root.querySelector(".buttons .prev")
	this.btnNext = this.root.querySelector(".buttons .next")
	this.images = this.root.querySelectorAll(".photos img")
	this.i = 0
	this.time = interval
		this.btnNext.addEventListener("click", function(){
		
		})
	this.btnNext.addEventListener('click', () => {
		this.next()
	})
	this.btnPrev.addEventListener('click', () => {
		this.prev()
	})
	}
	prev() {
		this.images[this.i].classList.remove('showed');
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}
	next() {
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}

}
/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
	this.next()
}) */
const animItems= document.querySelectorAll('._anim-items');

if(animItems.length>0){
	window.addEventListener('scroll', animOnScroll); 
	function animOnScroll(){
		for(let index=0; index<animItems.length; index++){
			const animItem=animItems[index];
			const animItemHeight=animItem.offsetHeight;
			const animItemOffset=offset(animItem).top;
			const animStart = 4;

			let animItemPoint= window.innerHeight - animItemHeight/ animStart;
			if (animItemHeight>window.innerHeight) {
				animItemPoint= window.innerHeight - window.innerHeight/ animStart;
			}

			if ((pageYOffset>animItemOffset-animItemPoint)&& pageYOffset < (animItemOffset+animItemHeight)) {
				animItem.classList.add('_active');
			}
				else{
					animItem.classList.remove('_active');
				}
		}
	}
	function offset(el) {
		const rect= el.getBoundingClientRect(),
		scrollLeft= window.pageXOffset || document.documentElement.scrollLeft;
		scrollTop= window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
//видео настройки
var video_main = document.querySelector('.unplayed');
var controls_play = document.querySelector('.video_playb');
var controls_stop =  document.querySelector('.video_stopb');
var controls_refresh =  document.querySelector('.video_refresh');

 controls_play.onclick = function() {
   video_main.play();
   controls_play.classList.add('hider');
   video_main.classList.replace('unplayed', 'played');
   controls_stop.classList.remove('hider');
   controls_refresh.classList.remove('hider');
  };

controls_stop.onclick = function() {
	video_main.pause();
	controls_stop.classList.add('hider');
	video_main.classList.replace('played', 'unplayed');
	controls_play.classList.remove('hider');
}


controls_refresh.onclick = function() {
   video_main.currentTime = 0;
  };

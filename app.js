//Sets the reveal of the project items
var projectOptions = {
	distance : '8%',
	duration : 1200,
	interval : 200,
	origin : 'right',
	scale : 0.95,
	reset : true,
	viewOffset: {
        bottom: 50,
        top : 10
    },
    easing : 'cubic-bezier(.26,.39,.24,.98)'
};

ScrollReveal().reveal('.project', projectOptions);


//Sets the reveal of the photos
var photosReveal = {
	duration : 3000,
	distance : '50px'
};

ScrollReveal().reveal('#photo-collage', photosReveal);

//Sets the reveal of the call to action
var callReveal = {
	duration : 2500,
	distance : '50px',
	reset : true
}

ScrollReveal().reveal('#contact-info', callReveal);

//Important function to reset the reveals to get correct layout
window.addEventListener("resize", resetReveals);
function resetReveals() {
	ScrollReveal().sync();
}
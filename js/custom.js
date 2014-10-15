// All Custom JS

//Looking for every element with slider class attribute
//3 variable have jquery - we know because of $
//then 3 javascript variables
//timeout has no defined value...yet

$('.slider').each(function (){

	var $this = $(this);
	var $group = $this.find('.slide-group');
	var $slides = $this.find('.slide');
	var buttonArray = [];
	var currentIndex = 0;
	var timeout;



//MOVE = I like to move it move it!!
//move funtion has 'newIndex' parameter
function move(newIndex) {
	var animateLeft, slideLeft;

//invoke advance
	advance();

// || is or
	if ($group.is(':animated') || currentIndex === newIndex) {
		return; //'if' is true then stops function - breaks out of funtion
	}

//arrays - remove class or add class
	buttonArray[currentIndex].removeClass('active');
	buttonArray[newIndex].addClass('active');

// ???
	if (newIndex > currentIndex) {
		slideLeft = '100%';
		animateLeft = '-100%';
    } else {
    	slideLeft = '-100%';
    	animateLeft = '100%';
	}


	$slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
	$group.animate( {left: animateLeft} , function() {
		$slides.eq(currentIndex).css( {display: 'none'} );
		$slides.eq(newIndex).css( {left: 0} );
		$group.css( {left: 0} );
		currentIndex = newIndex;
	});
}

//clearFuntion resets timer
//
function advance() {

	clearTimeout(timeout);

	timeout = setTimeout(function(){
		if (currentIndex < ($slides.length - 1)) {
			move(currentIndex + 1);
		} else {
			move(0);
		}
	  }, 6000); //speed of the interval
	}

//call back function - fuction as a parameter
$.each($slides, function(index){

//creates the button
	var $button = $('<button type="button" class="slide-btn">&bull;</button>');

//if index is current then add class
	if (index === currentIndex) {
		$button.addClass('active');
	}
//on click move the index
	$button.on('click', function(){
		move(index);
//appendTo is a method
	}).appendTo('.slide-buttons');
	buttonArray.push($button);
	});
//advance starts the timer
	advance();

  });



















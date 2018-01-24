/* COUNTER */
//Counter values
const FIRST_START = 2000;
const FIRST_FINISH = 2500;

const SECOND_START = 0;
const SECOND_FINISH = 255;

const THIRD_START = 2000;
const THIRD_FINISH = 2998;

const FOURTH_START = 0;
const FOURTH_FINISH = 15;

const STEP_VALUE = 1;
const SPEED_VALUE = 1;
//Counter values

jQuery(document).ready(function($) {
  $('.experience').viewportChecker({
      callbackFunction: function() {
      	counter(FIRST_START, FIRST_FINISH, document.getElementById("spells"), true);
      	counter(SECOND_START, SECOND_FINISH, document.getElementById("artifacts"));
      	counter(THIRD_START, THIRD_FINISH, document.getElementById("clients"));
      	counter(FOURTH_START, FOURTH_FINISH, document.getElementById("experience"));
	},
      scrollHorizontal: false
  });
});

function counter(from, to, id, plus) {
	let countInt = setInterval(function() {
		from += STEP_VALUE;
		if(from <= to) {
			id.innerText = from;			
		} else {
			if(plus) {
				id.innerText += "+";
			}
			clearInterval(countInt);
		}
	}, SPEED_VALUE);
}
/* COUNTER END */
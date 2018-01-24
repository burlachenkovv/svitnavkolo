/* MOBILE MENU */
function showMobile(arg) {
  let mobileOpen = document.getElementById("header__mobile__open");
  let mobileClose = document.getElementById("header__mobile__close");
  let mobileMenuOpen = document.getElementById("header__mobile__nav");
  //let mobileHeaderText = document.getElementById("header__text");

  if(arg) {
    mobileOpen.style.display = "none";
    mobileClose.style.display = "block";
    mobileMenuOpen.style.display = "block";
    //mobileHeaderText.style.display = "none";
  } else {
    mobileClose.style.display = "none";
    mobileMenuOpen.style.display = "none";
    mobileOpen.style.display = "block";
    //mobileHeaderText.style.display = "block";
  }

}
/* MOBILE MENU END */

/* COUNTER */
//Counter values
const FIRST_START = 0;
const FIRST_FINISH = 170;

const SECOND_START = 0;
const SECOND_FINISH = 50;

const THIRD_START = 0;
const THIRD_FINISH = 65;

const FOURTH_START = 0;
const FOURTH_FINISH = 8;

const STEP_VALUE = 1;
const SPEED_VALUE = 10;
//Counter values

jQuery(document).ready(function($) {
  $('.animation').viewportChecker({
      callbackFunction: function() {
      	counter(FIRST_START, FIRST_FINISH, document.getElementById("panoramsCounter"), true);
      	counter(SECOND_START, SECOND_FINISH, document.getElementById("toursCounter"));
      	counter(THIRD_START, THIRD_FINISH, document.getElementById("clientsCounter"), true);
      	counter(FOURTH_START, FOURTH_FINISH, document.getElementById("yearsCounter"));
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

/*
jQuery(document).ready(function($) {
  $('.main__descriptions').viewportChecker({
      callbackFunction: function() {
      	let imgObj = $('.main__descriptions img');
      	let arr = Array.from(imgObj);

      	arr.forEach((key) => {
      		key.classList.add("visible");
      	});
	},
      scrollHorizontal: false
  });
});
*/
jQuery(document).ready(function($) {
    let imgObj = $('.main__descriptions img');
    let arr = Array.from(imgObj);

    arr.forEach((key) => {
    	$(key).viewportChecker({
		      callbackFunction: function() {
		      	key.classList.add("visible");
			},
		      scrollHorizontal: false
		  });
    });
});

function setOpacityClass(imgArray) {

}
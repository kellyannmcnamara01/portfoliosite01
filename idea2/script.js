//alert("hello");

var navBg = document.getElementById("nav-logo-type");
var section1 = document.getElementById("section1").getBoundingClientRect();
var section1Height = section1.height;
//console.log('the height of section 1 is ' + section1Height);

function navScroll() {
    if (document.body.scrollTop >= section1Height) {
        navBg.style.color = "#fff";
    } else {
        navBg.style.color = "#8306e2";
    } // end if
} // end navScroll
//add event on window scroll
window.addEventListener("scroll", navScroll);

function isScrolledIntoView(el) {

    //grab the size and position of section2
    var portfolio1 = document.getElementById("portfolio1").getBoundingClientRect();
    var portfolio2 = document.getElementById("portfolio2").getBoundingClientRect();

    //gather all the portfolio blue boxes into variables based from the portfolio div they are found in
    var portfolio1BoxTop = document.querySelectorAll("#portfolio1 [class*='portfolio-blue-box-top-']");
    var portfolio1BoxBottom = document.querySelectorAll("#portfolio1 [class*='portfolio-blue-box-bottom-']");
    var portfolio2BoxTop = document.querySelectorAll("#portfolio2 [class*='portfolio-blue-box-top-']");
    var portfolio2BoxBottom = document.querySelectorAll("#portfolio2 [class*='portfolio-blue-box-bottom-']");

    var portfolio1Top = portfolio1.top;
    var portfolio2Top = portfolio2.top;
    //console.log(portfolio1Top);

    //create a function to add and remove the animation classes and pass through the portfolio id, the top boxes and the bottom boxes
    function setAnimation(boxes, boxesTop, boxesBottom) {
        /*if(boxes >= 780 && boxes <= 900){
            for (var i = 0; i < boxesTop.length; i++){
                boxesTop[i].style.display = "block";
                boxesTop[i].classList.add("portfolio-blue-box-animation-bye");
            }
            for (var i = 0; i < boxesBottom.length; i++){
                boxesBottom[i].style.display = "block";
                boxesBottom[i].classList.add("portfolio-blue-box-animation-bye");
            }

        } else*/ if(boxes <= 780 && boxes >= -500) {
            for (var i = 0; i < boxesTop.length; i++){
                boxesTop[i].style.display = "block";
                boxesTop[i].classList.remove("portfolio-blue-box-animation-bye");
                boxesTop[i].classList.add("portfolio-blue-box-top-animation");
            }
            for (var i = 0; i < boxesBottom.length; i++){
                boxesBottom[i].style.display = "block";
                boxesBottom[i].classList.remove("portfolio-blue-box-animation-bye");
                boxesBottom[i].classList.add("portfolio-blue-box-bottom-animation");
            }
        } else {
            for (var i = 0; i < boxesTop.length; i++){
                boxesTop[i].style.display = "block";
                boxesTop[i].classList.add("portfolio-blue-box-animation-bye");
            }
            for (var i = 0; i < boxesBottom.length; i++){
                boxesBottom[i].style.display = "block";
                boxesBottom[i].classList.add("portfolio-blue-box-animation-bye");
            }
        }
    }

    setAnimation(portfolio1Top, portfolio1BoxTop, portfolio1BoxBottom);
    setAnimation(portfolio2Top, portfolio2BoxTop, portfolio2BoxBottom);


} // end navScroll
window.addEventListener("scroll", isScrolledIntoView);




//---------------------
//---------------------
//---------------------

/*//alert("hello");

var navBg = document.getElementById("nav-logo-type");
var section1 = document.getElementById("section1").getBoundingClientRect();
var section1Height = section1.height;
//console.log('the height of section 1 is ' + section1Height);

function navScroll() {
    if (document.body.scrollTop >= section1Height) {
        navBg.style.color = "#fff";
    } else {
        navBg.style.color = "#8306e2";
    } // end if
} // end navScroll
//add event on window scroll
window.addEventListener("scroll", navScroll);

function isScrolledIntoView(el) {

    //grab the size and position of section2
    var portfolio1 = document.getElementById("portfolio1").getBoundingClientRect();
    var portfolio2 = document.getElementById("portfolio2").getBoundingClientRect();

    //gather all the portfolio blue boxes into variables based from the portfolio div they are found in
    var portfolio1BoxTop = document.querySelectorAll("#portfolio1 [class*='portfolio-blue-box-top-']");
    var portfolio1BoxBottom = document.querySelectorAll("#portfolio1 [class*='portfolio-blue-box-bottom-']");
    var portfolio2BoxTop = document.querySelectorAll("#portfolio2 [class*='portfolio-blue-box-top-']");
    var portfolio2BoxBottom = document.querySelectorAll("#portfolio2 [class*='portfolio-blue-box-bottom-']");

    var portfolio1Top = portfolio1.top;
    var portfolio2Top = portfolio2.top;
    var portfolioOneHeight = portfolio1.height;
    console.log(portfolio1Top);

    //if statement for portview one
    if(portfolio1Top >= 780 && portfolio1Top <= 900){
        for (var i = 0; i < portfolio1BoxTop.length; i++){
            portfolio1BoxTop[i].style.display = "block";
            portfolio1BoxTop[i].classList.add("portfolio-blue-box-animation-bye");
        }
        for (var i = 0; i < portfolio1BoxBottom.length; i++){
            portfolio1BoxBottom[i].style.display = "block";
            portfolio1BoxBottom[i].classList.add("portfolio-blue-box-animation-bye");
        }

    } else if(portfolio1Top <= 780 && portfolio1Top >= -500) {
        for (var i = 0; i < portfolio1BoxTop.length; i++){
            portfolio1BoxTop[i].style.display = "block";
            portfolio1BoxTop[i].classList.remove("portfolio-blue-box-animation-bye");
            portfolio1BoxTop[i].classList.add("portfolio-blue-box-top-animation");
        }
        for (var i = 0; i < portfolio1BoxBottom.length; i++){
            portfolio1BoxBottom[i].style.display = "block";
            portfolio1BoxBottom[i].classList.remove("portfolio-blue-box-animation-bye");
            portfolio1BoxBottom[i].classList.add("portfolio-blue-box-bottom-animation");
        }
    } else {
        for (var i = 0; i < portfolio1BoxTop.length; i++){
            portfolio1BoxTop[i].style.display = "block";
            portfolio1BoxTop[i].classList.add("portfolio-blue-box-animation-bye");
        }
        for (var i = 0; i < portfolio1BoxBottom.length; i++){
            portfolio1BoxBottom[i].style.display = "block";
            portfolio1BoxBottom[i].classList.add("portfolio-blue-box-animation-bye");
        }
    }

    //if statement for portview two
    if(portfolio2Top >= 780 && portfolio2Top <= 900){
        for (var i = 0; i < portfolio2BoxTop.length; i++){
            portfolio2BoxTop[i].style.display = "block";
            portfolio2BoxTop[i].classList.add("portfolio-blue-box-animation-bye");
        }
        for (var i = 0; i < portfolio2BoxBottom.length; i++){
            portfolio2BoxBottom[i].style.display = "block";
            portfolio2BoxBottom[i].classList.add("portfolio-blue-box-animation-bye");
        }

    } else if(portfolio2Top <= 780 && portfolio2Top >= -500) {
        for (var i = 0; i < portfolio2BoxTop.length; i++){
            portfolio2BoxTop[i].style.display = "block";
            portfolio2BoxTop[i].classList.remove("portfolio-blue-box-animation-bye");
            portfolio2BoxTop[i].classList.add("portfolio-blue-box-top-animation");
        }
        for (var i = 0; i < portfolio2BoxBottom.length; i++){
            portfolio2BoxBottom[i].style.display = "block";
            portfolio2BoxBottom[i].classList.remove("portfolio-blue-box-animation-bye");
            portfolio2BoxBottom[i].classList.add("portfolio-blue-box-bottom-animation");
        }
    } else {
        for (var i = 0; i < portfolio2BoxTop.length; i++){
            portfolio2BoxTop[i].style.display = "block";
            portfolio2BoxTop[i].classList.add("portfolio-blue-box-animation-bye");
        }
        for (var i = 0; i < portfolio2BoxBottom.length; i++){
            portfolio2BoxBottom[i].style.display = "block";
            portfolio2BoxBottom[i].classList.add("portfolio-blue-box-animation-bye");
        }
    }
} // end navScroll
window.addEventListener("scroll", isScrolledIntoView);
*/

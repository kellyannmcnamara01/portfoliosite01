    //alert("hello");
window.onload = function() {

    //create vars
    var navBg = document.getElementById("nav-logo-type");
    var section2 = document.getElementById("section2").getBoundingClientRect();
    var folioThumbs = document.getElementById("folio-thumbs").getBoundingClientRect();
    var section2Top = section2.top - 25;
    var folioThumbsBottom = folioThumbs.bottom - 25;
    //console.log('the height of section 1 is ' + section1Height);

    //kam logo colour change
    function navScroll() {
        if (document.body.scrollTop >= section2Top && document.body.scrollTop <= folioThumbsBottom) {
            navBg.style.color = "#fff";
            console.log('hi');
        } else {
            navBg.style.color = "#8306e2";
        } // end if
    } // end navScroll
    //add event on window scroll
    window.addEventListener("scroll", navScroll);

    //hamham turns to exit button
    var hamham = document.querySelector('#hamham');
    var hamToggle = document.querySelector('#ham-toggle');

    hamham.onclick = function () {
        if (hamham.className == 'open') {
            hamham.classList.remove('open');
            hamToggle.classList.add('close');
        }
        else {
            hamham.classList.add('open');
            hamToggle.classList.remove('close');
        }
    };
    hamToggle.onclick = function () {
        if (hamham.className == 'open') {
            hamham.classList.remove('open');
            hamToggle.classList.add('close');
        }
        else {
            hamham.classList.add('open');
            hamToggle.classList.remove('close');
        }
    };
    
    //smooth scrolling using jQuery
    //home link in nav
    $('#section1-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#section1").offset().top
            },
            1000);
    });
    //work link in nav
    $('#section2-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#section2").offset().top
            },
            1000);
    });
    //client link in nav
    $('#selected-clients-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#selected-clients").offset().top
            },
            1000);
    });
    //client link in nav
    $('#contact-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#contact").offset().top
            },
            1000);
    });

    //purple sliding boxes
    function isScrolledIntoView(el) {

        //grab the size and position of section2
        var portfolio1 = document.getElementById("portfolio1").getBoundingClientRect();
        var portfolio2 = document.getElementById("portfolio2").getBoundingClientRect();
        var portfolio3 = document.getElementById("portfolio3").getBoundingClientRect();

        //gather all the portfolio blue boxes into variables based from the portfolio div they are found in
        var portfolio1BoxTop = document.querySelectorAll("#portfolio1 [class*='portfolio-blue-box-top-']");
        var portfolio1BoxBottom = document.querySelectorAll("#portfolio1 [class*='portfolio-blue-box-bottom-']");
        var portfolio2BoxTop = document.querySelectorAll("#portfolio2 [class*='portfolio-blue-box-top-']");
        var portfolio2BoxBottom = document.querySelectorAll("#portfolio2 [class*='portfolio-blue-box-bottom-']");
        var portfolio3BoxTop = document.querySelectorAll("#portfolio3 [class*='portfolio-blue-box-top-']");
        var portfolio3BoxBottom = document.querySelectorAll("#portfolio3 [class*='portfolio-blue-box-bottom-']");

        var portfolio1Top = portfolio1.top;
        var portfolio2Top = portfolio2.top;
        var portfolio3Top = portfolio3.top;
        //console.log(portfolio1Top);

        //create a function to add and remove the animation classes and pass through the portfolio id, the top boxes and the bottom boxes
        function setAnimation(boxes, boxesTop, boxesBottom) {
            if (boxes <= 780 && boxes >= -500) {
                for (var i = 0; i < boxesTop.length; i++) {
                    boxesTop[i].style.display = "block";
                    boxesTop[i].classList.remove("portfolio-blue-box-animation-bye");
                    boxesTop[i].classList.add("portfolio-blue-box-top-animation");
                }
                for (var i = 0; i < boxesBottom.length; i++) {
                    boxesBottom[i].style.display = "block";
                    boxesBottom[i].classList.remove("portfolio-blue-box-animation-bye");
                    boxesBottom[i].classList.add("portfolio-blue-box-bottom-animation");
                }
            } else {
                for (var i = 0; i < boxesTop.length; i++) {
                    boxesTop[i].style.display = "block";
                    boxesTop[i].classList.add("portfolio-blue-box-animation-bye");
                }
                for (var i = 0; i < boxesBottom.length; i++) {
                    boxesBottom[i].style.display = "block";
                    boxesBottom[i].classList.add("portfolio-blue-box-animation-bye");
                }
            }
        }

        setAnimation(portfolio1Top, portfolio1BoxTop, portfolio1BoxBottom);
        setAnimation(portfolio2Top, portfolio2BoxTop, portfolio2BoxBottom);
        setAnimation(portfolio3Top, portfolio3BoxTop, portfolio3BoxBottom);


    } // end navScroll
    window.addEventListener("scroll", isScrolledIntoView);

};


    //---------------------
    //---------------------
    //---------------------

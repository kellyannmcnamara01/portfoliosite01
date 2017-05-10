function toggleMenu() {
  // menu links
  var menu = document.querySelector("#mobile-nav");
  if (menu.className == 'show-small') {
    menu.classList.remove('show-small');
  } else {
    menu.classList.add('show-small');
  }
  
}
function exception() {
    // ham
    var hamham = document.querySelector("#hamham");
    if (hamham.className == 'open') {
      hamham.classList.remove('open');
    }
    else {
      hamham.classList.add('open');
    }
  }
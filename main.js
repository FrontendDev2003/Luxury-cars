document.addEventListener("DOMContentLoaded", function(event) {

  const navBtn = document.querySelector('.nav-btn');
  const navigation = document.querySelector('.nav');

  navBtn.addEventListener('click', () => {
    navigation.classList.toggle('nav-open');
    if (navigation.classList.contains('nav-open')) {
      navBtn.src = 'img/menu/cross.png';
      document.querySelector(".nav-list").setAttribute("style", "margin-block-start:0em;");
      document.getElementsByClassName('nav-btn')[0].style.width = "23px";
      document.getElementsByClassName('nav-btn')[0].style.height = "23px";
    } else {
      navBtn.src = 'img/menu/menu-lines.png';
      document.querySelector(".nav-list").setAttribute("style", "margin-block-start:0em;");
      document.getElementsByClassName('nav-btn')[0].style.width = "40px";
      document.getElementsByClassName('nav-btn')[0].style.height = "40px";
    }
  });
});
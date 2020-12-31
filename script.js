const navSlide = () => {
  const burger =  document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const nav_links = document.querySelectorAll('.nav-links li');

  // toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    // animate nav_links
    nav_links.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = ''
      }
      else{
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // burger animation
    burger.classList.toggle('toggle');
  });


}

navSlide();

const menuBtn = document.getElementById('menuBtn');
const navBar = document.getElementById('navBar');
menuBtn.addEventListener('click', function (e) {  
   e.preventDefault()
   if (navBar.classList.contains('closed-menu')) {
      navBar.classList.remove('closed-menu');
      menuBtn.setAttribute('aria-expanded', 'true');
      navBar.classList.add('open-menu');

   } else {
      navBar.classList.remove('open-menu');
      menuBtn.setAttribute('aria-expanded', 'false');
      navBar.classList.add('closed-menu');
   }
})
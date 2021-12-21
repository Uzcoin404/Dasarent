(() => {
  const header = document.querySelector('.header__nav');
  const headerContent = document.querySelector('.header__content');
  const socialHeader = document.querySelector('.header__content .social');

  if (header && headerContent) {
    checkScrolled();
    window.addEventListener('scroll', () => checkScrolled());
  }

  const menu = document.querySelector('.header__nav-menu');
  const menuBtn = document.querySelector('.btn-burger');
  if (menuBtn) menuBtn.addEventListener('click', e => {
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  function checkScrolled() {
    if (scrollY > header.clientHeight) {
      header.classList.add('scrolled');
      socialHeader.classList.add('scrolled');
    } else if (scrollY < header.clientHeight) {
      header.classList.remove('scrolled');
      socialHeader.classList.remove('scrolled');
    }
  }
})();

const bidInput = document.querySelectorAll('.bid_input');
const bidLabel = document.querySelectorAll('.bid_label');

for (let i = 0; i < bidInput.length; i++) {
  bidInput[i].addEventListener('input', function () {
    if (this.value.length > 0) {
      bidLabel[i].style.display = 'none';
    } else {
      bidLabel[i].style.display = 'block';
    }
  });
}
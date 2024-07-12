(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero-cta'),
    closeModalBtn: document.querySelector('#modal-close'),
    modal: document.querySelector('.modal-overlay'),
    openMenuBtn: document.querySelector('.header-menu-btn'),
    closeMenuBtn: document.querySelector('#menu-close'),
    menu: document.querySelector('.modal-menu'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
})();

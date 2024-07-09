(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero-cta'),
    closeModalBtn: document.querySelector('.modal-close'),
    modal: document.querySelector('.modal-overlay'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

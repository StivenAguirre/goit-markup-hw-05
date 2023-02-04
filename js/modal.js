(() => {
  const refs = {
    openModalBtn: document.querySelector('btn-open-modal'),
    closeModalBtn: document.querySelector('btn-open-close'),
    modal: document.querySelector('data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(modal) {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const btnAbrirModal = document.querySelector('#btn-open-modal');
const btnCerrarModal = document.querySelector('#btn-close-modal');
const modal = document.querySelector('#modal');

btnAbrirModal.addEventListener('click', () => {
  modal.showModal();
});

btnCerrarModal.addEventListener('click', () => {
  modal.close();
});

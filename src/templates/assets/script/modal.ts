document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const modal = document.getElementById('modal');
  const openModalButton = document.querySelectorAll('.cards__item');
  const closeButton = document.querySelector('.close-button');

  if(openModalButton) {
    openModalButton.forEach((item) => {
      item.addEventListener('click', () => {
        if(modal) {
          const inner = modal.querySelector('.modal__inner');

          if(inner) {
             inner.innerHTML = item.innerHTML;
          }

          modal.style.display = 'block';
          if(body) body.classList.toggle('lock');
        }
      });
    });
  }

  if(closeButton) {
    closeButton.addEventListener('click', () => {
      if(modal) {
        modal.style.display = 'none';
        if(body) body.classList.toggle('lock');
      }
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      if(modal) {
        modal.style.display = 'none';
        if(body) body.classList.toggle('lock');
      }
    }
  });
});
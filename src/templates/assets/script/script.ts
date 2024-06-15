import './dropdown';
import './modal';

window.addEventListener('DOMContentLoaded', () => {
  const form =<HTMLFormElement> document.getElementById('filter');

  if(form) {
    const reset = form.querySelector('.reset');
    
    if(reset) {
      reset.addEventListener('click', () => {
        form.reset();

        const dropdown = form.querySelectorAll('.dropdown');

        if(dropdown) {
          dropdown.forEach((item) => {
            const hidden = <HTMLInputElement>item.querySelector('.dropdown__input-hidden');
            const select = <HTMLElement>item.querySelector('.dropdown__select');

            if(hidden) hidden.value = '0';
            if(select) select.innerHTML = select.dataset.default ?? '';
          });
        }
      });
    }
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      alert('Заглушка')
    });
  }
});
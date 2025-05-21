document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burgerToggle');
  const asidePanel = document.querySelector('.forma4');

  if (burger && asidePanel) {
    burger.addEventListener('click', () => {
      asidePanel.classList.toggle('active');
    });
  } else {
    console.warn('Не знайдено елементів для керування меню.');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const brandsList = document.getElementById('brandsList');
  const items = brandsList.querySelectorAll('li');
  const toggleBtn = document.getElementById('toggleButton');
  const mobileWidth = 767;

  // Десктоп: скрываем все элементы после 5-го
  if (window.innerWidth > mobileWidth) {
    items.forEach((item, index) => {
      if (index >= 5) item.classList.add('hidden');
    });
  }

  // Мобилка: активируем Swiper
  if (window.innerWidth <= mobileWidth) {
    brandsList.classList.add('swiper-wrapper');
    items.forEach(item => item.classList.add('swiper-slide'));

    new Swiper('.brands-list', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false
    });

    toggleBtn.style.display = 'none'; // скрываем кнопку
  }

  // Логика кнопки
  toggleBtn.addEventListener('click', function() {
    const isExpanded = toggleBtn.textContent.includes('Скрыть');
    if (!isExpanded) {
      items.forEach((item, index) => {
        if (index >= 5) item.classList.remove('hidden');
      });
      toggleBtn.textContent = 'Скрыть';
    } else {
      items.forEach((item, index) => {
        if (index >= 5) item.classList.add('hidden');
      });
      toggleBtn.textContent = 'Показать все';
    }
  });
});

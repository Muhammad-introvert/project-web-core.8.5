document.addEventListener('DOMContentLoaded', () => {
    const mobileContainer = document.querySelector('.mobile-brands-container');
    const desktopContainer = document.querySelector('.desktop-brands-container');
    const toggleButton = document.getElementById('toggleButton');
    
    let swiperInstance = null;

    function handleDisplay() {
        const viewportWidth = window.innerWidth;
        
        if (viewportWidth < 768) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.brands-list', {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
            if (toggleButton) {
                toggleButton.classList.add('toggle-button--hidden');
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
            if (toggleButton) {
                toggleButton.classList.remove('toggle-button--hidden');
            }
        }
    }

    function toggleBrands() {
        const isExpanded = desktopContainer.classList.contains('show-all');
        
        if (isExpanded) {
            desktopContainer.classList.remove('show-all');
            toggleButton.textContent = 'Показать все';
            toggleButton.classList.remove('expanded');
        } else {
            desktopContainer.classList.add('show-all');
            toggleButton.textContent = 'Скрыть';
            toggleButton.classList.add('expanded');
        }
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', toggleBrands);
    }
    
    window.addEventListener('load', handleDisplay);
    window.addEventListener('resize', handleDisplay);
});
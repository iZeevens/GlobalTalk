const menuContainer = document.querySelector('.menu-container'),
      navContaineMobile = document.querySelector('.nav-container-mobile'),
      main = document.querySelector('main'),
      footer = document.querySelector('.footer')

function toggleMenu() {
    // Добавляем/удаляем класс 'open' у menuContainer
    menuContainer.classList.toggle('open');

    // Добавляем/удаляем класс 'none' у main
    main.classList.toggle('none');

    // Добавляем/удаляем класс 'none' у footer
    footer.classList.toggle('none');

    menuContainer.classList.contains('open') ? navContaineMobile.style.display = 'flex' : navContaineMobile.style.display = 'none';
}
      
// Добавляем слушатель события 'click' к menuContainer
menuContainer.addEventListener('click', toggleMenu);
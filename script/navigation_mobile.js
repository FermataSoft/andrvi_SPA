'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
  const $burgerBtn = document.querySelector('.navmenu__burger');
  const $nav = document.querySelector('.navmenu__block');
  const $navmenu_items = document.querySelectorAll('.navmenu__menuBtn');
  const $body = document.querySelector('body');

  $burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    $burgerBtn.classList.toggle('_active');
    $nav.classList.toggle('_active');
    $body.classList.toggle('_locked');
  });

  $navmenu_items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      if ($body.classList.contains('_locked')) {
        $burgerBtn.classList.toggle('_active');
        $nav.classList.toggle('_active');
        $body.classList.toggle('_locked');
      }
    });
  });
});

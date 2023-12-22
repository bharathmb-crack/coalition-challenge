'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var mountainOne = document.getElementById('mountain-one');
  var mountainTwo = document.getElementById('mountain-two');
  var tabOneImage = document.getElementById('tab-one-image');
  var tabTwoImage = document.getElementById('tab-two-image');
  var scheduleSection = document.getElementById('schedule-section');

  var accordionButtonOne = document.getElementById('accordion-button-one');
  var collapseOne = document.getElementById('flush-collapseOne');

  var accordionButtonTwo = document.getElementById('accordion-button-two');
  var collapseTwo = document.getElementById('flush-collapseTwo');

  function toggleElements() {
    mountainOne.classList.toggle('active');
    mountainOne.classList.toggle('inactive');
    mountainTwo.classList.toggle('active');
    mountainTwo.classList.toggle('inactive');

    tabOneImage.classList.toggle('active-tab-image');
    tabOneImage.classList.toggle('inactive-tab-image');
    tabTwoImage.classList.toggle('active-tab-image');
    tabTwoImage.classList.toggle('inactive-tab-image');

    scheduleSection.classList.toggle('active-section');
    scheduleSection.classList.toggle('inactive-section');
  }

  function toggleAccordion(button, collapse) {
    button.classList.toggle('collapsed');
    collapse.classList.toggle('show');
  }

  mountainOne.addEventListener('click', toggleElements);
  mountainTwo.addEventListener('click', toggleElements);

  accordionButtonOne.addEventListener('click', function () {
    toggleAccordion(accordionButtonOne, collapseOne);
  });

  accordionButtonTwo.addEventListener('click', function () {
    toggleAccordion(accordionButtonTwo, collapseTwo);
  });
});

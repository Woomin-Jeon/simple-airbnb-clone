import { showByFlex, showByBlock, hide } from './util.js';

const $searchButton = document.getElementById('searchButton');
const $userButton = document.getElementById('userButton');
const $userButtonOn = document.getElementById('userButtonOn');
const $categoryLocation = document.getElementById('category-location');
const $categoryActivity = document.getElementById('category-activity');
const $reservationActivity = document.getElementById('reservation-activity');
const $reservationLocation = document.getElementById('reservation-location');
const $reservationDate = document.getElementById('reservation_date');

const activate = (dom) => {
  dom.classList.add('category-active');
};

const deactivate = (dom) => {
  dom.classList.remove('category-active');
};

$reservationDate.addEventListener('click', () => {
  const $calendar = document.getElementById('calendar');

  const targetAttribute = $calendar.style.display;
  if (!targetAttribute || targetAttribute === 'none') {
    showByFlex($calendar);
    return;
  }

  hide($calendar);
});

$categoryActivity.addEventListener('click', () => {
  showByFlex($reservationActivity);
  hide($reservationLocation);
  activate($categoryActivity);
  deactivate($categoryLocation);
});
$categoryLocation.addEventListener('click', () => {
  showByFlex($reservationLocation);
  hide($reservationActivity);
  activate($categoryLocation);
  deactivate($categoryActivity);
});
$userButton.addEventListener('click', () => {
  const targetAttribute = $userButtonOn.style.display;
  if (!targetAttribute || targetAttribute === 'none') {
    showByBlock($userButtonOn);
    return;
  }

  hide($userButtonOn);
});
$searchButton.addEventListener('click', () => {
  alert('search!');
});

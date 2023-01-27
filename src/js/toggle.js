import { fetchPopular, fetchPopularDay } from './api-service';

const toggle = document.querySelector('#input-toggle');
console.dir(toggle);

toggle.addEventListener('change', onCheckBox);
function onCheckBox() {
  if (toggle.checked) {
    const trendingInDay = fetchPopularDay(1);
    trendingInDay.then(data => console.log('Day', data));
    //add function renderMarkup on data
  } else {
    const trendingInDWeek = fetchPopular(1);
    trendingInDWeek.then(data => console.log('Week', data));
    //add function renderMarkup on data
  }
}

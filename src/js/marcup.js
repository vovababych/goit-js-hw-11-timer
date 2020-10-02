import templateFields from '../template/timeFields.hbs';

const timerRef = document.querySelector('.timer');

const time = [
  {
    name: 'days',
    lable: 'Days',
  },
  {
    name: 'hours',
    lable: 'Hours',
  },
  {
    name: 'mins',
    lable: 'Minutes',
  },
  {
    name: 'secs',
    lable: 'Seconds',
  },
];

const markup = templateFields(time);
timerRef.insertAdjacentHTML('beforeend', markup);

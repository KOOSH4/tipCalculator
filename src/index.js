import './style.css';
const percent5 = document.getElementById('percentage5');
const percent10 = document.getElementById('percentage10');
const percent15 = document.getElementById('percentage15');
const percent25 = document.getElementById('percentage25');
const percent50 = document.getElementById('percentage50');
const amountInput = document.getElementById('amountInput');
const peopleNumber = document.getElementById('peopleNumber');
const total = document.getElementById('total');
const tipAmount = document.getElementById('tipAmount');
const resetBtn = document.getElementById('resetBtn');
let themeToggleBtn = document.getElementById('theme-toggle');
let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

let bill = +amountInput.value;
let percentage;
checkPercent();
reset();
let person = +peopleNumber.value;

function tipCalculator() {
  percentage = checkPercent();
  person = +peopleNumber.value;
  bill = +amountInput.value;
  let billPerson = bill / person;
  let tipPerson = (billPerson / 100) * percentage;
  let totalToPay = billPerson + tipPerson;
  tipAmount.innerText = tipPerson.toFixed(2);
  total.innerText = totalToPay.toFixed(2);
  return;
}
percent5.addEventListener('change', function () {
  tipCalculator();
});
percent10.addEventListener('change', function () {
  tipCalculator();
});
percent15.addEventListener('change', function () {
  tipCalculator();
});
percent25.addEventListener('change', function () {
  tipCalculator();
});
percent50.addEventListener('change', function () {
  tipCalculator();
});

amountInput.addEventListener('change', function () {
  tipCalculator();
});
peopleNumber.addEventListener('change', function () {
  tipCalculator();
});

function checkPercent() {
  if (percent5.checked) {
    percentage = 5;
  }
  if (percent10.checked) {
    percentage = 10;
  }
  if (percent15.checked) {
    percentage = 15;
  }
  if (percent25.checked) {
    percentage = 25;
  }
  if (percent50.checked) {
    percentage = 50;
  }
  return percentage;
}

//TODO:
//ADD CUSTOM functionallity
//ADD Responsice
//ADD DarkMode
resetBtn.addEventListener('click', function () {
  reset();
});
function reset() {
  peopleNumber.value = 1;
  amountInput.value = 0;
  tipAmount.innerText = '0.0';
  total.innerText = '0.0';
}

// darkmode

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function (event) {
  event.preventDefault();
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});

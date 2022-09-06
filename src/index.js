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

let bill = +amountInput.value;
let percentage;
checkPercent();
let person = +peopleNumber.value;
console.log(bill);
console.log(person);
function tipCalculator() {
  percentage = checkPercent();
  person = +peopleNumber.value;
  bill = +amountInput.value;
  let totalTipp = (bill / person).toFixed(2);
  let each = ((totalTipp / 100) * percentage).toFixed(2);
  total.innerText = totalTipp;
  tipAmount.innerText = each;
  console.log('active');
  return each;
}
console.log(tipCalculator());

console.log(percentage);

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
  console.log(percent5.checked);
  console.log(percent10.checked);
  console.log(percent15.checked);
  console.log(percent25.checked);
  console.log(percent50.checked);
  return percentage;
}
total.innerText = totalTipp;
tipAmount.innerText = each;
//TODO:
//ADD CUSTOM functionallity
//ADD Responsice
//ADD DarkMode

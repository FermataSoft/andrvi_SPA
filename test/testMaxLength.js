const symbolsCount = 51;

function test_maxLength(symbolsCount) {
  let str = '';
  for (let i = 0; i < symbolsCount; i++) {
    str += randomSymbol();
  }
  console.log(str);
  console.log(`Count: ${str.length}`);
}

function randomSymbol() {
  return String.fromCharCode(randomInteger(91, 122));
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

test_maxLength(symbolsCount);

document.querySelector('#name').addEventListener('change', (e) => {
  strPasted = document.querySelector('#name').value;
  console.log(`Pasted count: ${strPasted.length}`);
});

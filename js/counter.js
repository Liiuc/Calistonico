const counterElem = document.querySelector('#counter');

let subs = 4082 + 1;
let output = 0;

setTimeout(() => {

  const counter = setInterval(() => {

    if (output === subs) {
      clearInterval(counter);
    } else {
      counterElem.innerHTML = `${output++}`;
    }

  }, 10);

}, 3000);
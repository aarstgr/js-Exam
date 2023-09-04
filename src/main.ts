import './style.css'

const numberInput = document.getElementById('numberInput') as HTMLInputElement;
const randomButton = document.getElementById('randomButton') as HTMLButtonElement;
const primeButton = document.getElementById('primeButton') as HTMLButtonElement;
const resetButton = document.getElementById('resetButton') as HTMLButtonElement;

randomButton.addEventListener('click', generateRandomNumber);
primeButton.addEventListener('click', calculatePrimeNumbers);
resetButton.addEventListener('click', reset);

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  numberInput.value = String(randomNumber);
}


function calculatePrimeNumbers() {
  const inputNumber = Number(numberInput.value);
  if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 99999) {
    console.error('Invalid input. Please enter a number between 0 and 99999.');
    return;
  }

  const primes: number[] = [];
  for (let i = 2; i <= inputNumber; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }

  console.log('Prime numbers:', primes);
}


function reset() {
  numberInput.value = '';
}

type BoxProps={
  element:string;
  attr?:any;
  children?:string | string[] | Element |Element[];
};

const Box = (props:BoxProps)=>{
  const el = document.createElement(props.element); 
  el.className =props.attr?.className;
  if (!Array.isArray(props.children)) el.append(props.children!);
  else el.append(...props.children)
  return el;
 
};

const app = document.querySelector<HTMLDivElement>('#app');
app!.append (

)



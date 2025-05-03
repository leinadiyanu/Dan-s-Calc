import {add, subtract, divide, multiply} from './my_module/calculator.js';
import path from 'path';
import { fileURLToPath } from 'url';
import colors from 'colors';
import readline from 'readline';

let $filename = fileURLToPath(import.meta.url)
// console.log(path.basename($filename))

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate() {
    rl.question('Enter the first number: ', (num1Input) => {
      const num1 = parseFloat(num1Input);
  
      rl.question('Enter the second number: ', (num2Input) => {
        const num2 = parseFloat(num2Input);
  
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
          let result;
          let color;
  
          switch (operation) {
            case '+':
              result = add(num1, num2);
              color = 'red';
              break;
            case '-':
              result = subtract(num1, num2);
              color = 'blue';
              break;
            case '*':
              result = multiply(num1, num2);
              color = 'green';
              break;
            case '/':
              result = divide(num1, num2);
              color = 'yellow';
              break;
            default:
              console.log('Invalid operation.'.red);
              rl.close();
              return;
          }
  
          if (typeof result === 'string') {
            console.log(result.red); 
          } else {
            console.log(`Result: ${String(result)[color]}`);
          }
          rl.close();
        });
      });
    });
  }
  
  calculate()

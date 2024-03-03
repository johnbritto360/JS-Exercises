const button=document.querySelector('button');
let res=document.createElement('div');
res.id='result';
document.getElementById('wrapper').appendChild(res);
button.addEventListener('click',calc);
function calc() {
            const expressionInput = document.getElementById('expression').value;
            const resultContainer = document.getElementById('result');

            const matches = expressionInput.match(/(\d+)([+\-*/])(\d+)/);

            if (matches) {
                const operand1 = parseInt(matches[1], 10);
                const operator = matches[2];
                const operand2 = parseInt(matches[3], 10);

                let result;

                switch (operator) {
                    case '+':
                        result = operand1 + operand2;
                        break;
                    case '-':
                        result = operand1 - operand2;
                        break;
                    case '*':
                        result = operand1 * operand2;
                        break;
                    case '/':
                        result = operand1 / operand2;
                        break;
                    default:
                        resultContainer.innerHTML = "Invalid operator";
                        return;
                }

                resultContainer.innerHTML = `Result: ${result}`;
            } else {
                resultContainer.innerHTML = "Invalid expression format";
            }
        }

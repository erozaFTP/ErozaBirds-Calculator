/*----------------*/
console.log('test');
/*----------------*/




/* 1. FIRST THiNG THAT WAS DONE WAS TO GET ALL THE BUTTONS.

.SIDENOTE::i've asked 
"I know how to read code but don't know how to put 
the pieces together" and most of the answers were around "cutting the pieces together" or 
cutting your problems to steps. */

const numberButtons = document.querySelectorAll('[data-number]');/*this gets all our custom attributes with buttons given "data-number" name from html */

const operationButtons = document.querySelectorAll('[data-operation]');
/*this one gets attributes with "data-operation"name*/

const equalsButton =document.querySelector('[data-equals]');

const deleteButton =document.querySelector('[data-delete');

const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');

const currentOperandTextElement =document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
/*--------------------------END OF THE 1ST STEP--------------------------------------------*/ 



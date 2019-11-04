/*----------------*/
console.log('test');
/*----------------*/




/* STEP 1. FIRST THiNG THAT WAS DONE WAS TO GET ALL THE BUTTONS. 

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
/*=-=-==-=--=-==-=--=-=-=-=-=-=-=-=-=--=-==--=-==-=-=-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=*/

/*STEP 2 MAKING A CLASS-THE MOST CRUCIAL PART FOR THE FUNCTIONALITY OF THE CALCULATOR
NOW WHAT IS A CLASS? you might ask>? which is a totally reasonable question especially if javascript
is your first language to learn   (most programming languages have classes) (in es5'ecmascript 5' 
it is made to emulate class like functionality);
Classes are blueprints or templates that be used to create new objects from. They hold 
information, details, about an object.
more in depth guide can be found here https://www.youtube.com/watch?v=8yjkWGRlUmY  - CS Dojo
with 1.13m subs a
*/ 


class Calculator{

constructor(prev){
  /*constructors sort of like a function */ 
  


}

}





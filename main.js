/*----------------*/
console.log('test');
/*----------------*/




/* STEP 1. FIRST THiNG THAT WAS DONE WAS TO GET ALL THE BUTTONS. 

.SIDENOTE::i've asked 
"I know how to read code but don't know how to put 
the pieces together" and most of the answers were around "cutting the pieces together" or 
cutting your problems to steps. */

const numberButtons = document.querySelectorAll('[data-number]'); /*this gets all our custom attributes with buttons given "data-number" name from html */

const operationButtons = document.querySelectorAll('[data-operation]');
/*this one gets attributes with "data-operation"name*/

const equalsButton = document.querySelector('[data-equals]');

const deleteButton = document.querySelector('[data-delete');

const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');

const currentOperandTextElement = document.querySelector('[data-current-operand]');


/*--------------------------END OF THE 1ST STEP--------------------------------------------*/
/*=-=-==-=--=-==-=--=-=-=-=-=-=-=-=-=--=-==--=-==-=-=-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=*/

/*STEP 2 MAKING A CLASS-THE MOST CRUCIAL PART FOR THE FUNCTIONALITY OF THE CALCULATOR
NOW WHAT IS A CLASS? you might ask>? which is a totally reasonable question especially if javascript
is your first language to learn   (most programming languages have classes) (in es5'ecmascript 5' 
it is made to emulate class like functionality);
Classes are blueprints or templates that be used to create new objects from. They hold 
information, details, about an object.
more in depth guide can be found here https://www.youtube.com/watch?v=8yjkWGRlUmY  - CS Dojo
with 1.13m subs 
*/

class Calculator {

  constructor(param1, param2) /*<-- these are paramaters at the moment but are given a values/arguments later on inside the constructor scope */
  /*parameters () inside constructor/function get the functionality from inside
  its scope NOT OUTSIDE* a clear tutorial about parameters inside a function/constructor
  a clear tutorial with timestamp at https://youtu.be/xjAu2Y2nJ34?t=477 -Dev Ed with 177k subscribers. another good resource that clears up the
  */
  {

    this.previousOperandTextElement = param1;
    /*both of these take parameters you passed in, 
    and makes them properties of the class.*/
    this.currentOperandTextElement = param2;
    /*a very clear explanation on reddit on what parameters do and the what the syntax in the constructor scope actually does...
    https://www.reddit.com/r/learnjavascript/comments/drpocu/im_confused_on_what_the_highlighted_part_actually/f6mkz3s/?context=3
    
    */
    this.clear()
  }


  /*this clears the output*/
  clear() {

    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.wtf= console.log('');

  }


  /*deletes a single number*/
  delete() {

  }
  /**/
  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return /* return stops our function from executing any further.*/
    
    this.currentOperand = this.currentOperand.toString() + number.toString()
 
    /*the if statement above checks to see if their's period('.') already in the input. and if their a period in the input it stops the user from adding another period'......'*/
    this.wtf= console.log('a number/period has been appended');


  }

  /*what happens after a user clicks on a specific operation.*/
  chooseOperation(operation) {
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){

      this.compute()
    }
    this.operation= operation
    this.previousOperand= this.currentOperand
    this.currentOperand = ''
  }

  /**/
  compute() {
    let computation;
    const prev= parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev)|| isNaN(current)) return
    switch (this.operation)
    { 
      case '+':
      computation = prev+ current
      break 

      case '-':
        computation = prev+ current
        break 

        case '*':
          computation = prev+ current
          break 

          case '÷':
            computation = prev+ current
            break 
    default:
      return


    }

    
this.currentOperand =computation
this.operation =undefined
this.previousOperand = ''

  }



  /*updates display.*/
  updateDisplay() {



    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand

  }

}
/*3rd step adding the onclicks--==--==-=--==--=-=-=-=-=-=--=-=-=-=-=-=-=-=--========-=-=-=*/

        
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


/*_.foreach_loops over all the buttons with number it basically selects them all and assigns them the same functionality*/

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay() /*using functions within the class */
  })
})



operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay() /*using functions within the class */
  })
})

equalsButton.addEventListener('click', button =>{

  calculator.compute()
  calculator.updateDisplay()
})

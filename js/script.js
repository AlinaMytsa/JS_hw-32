'use strict';
(function (){


  let calculator = {
   firstNum : null,
   secondNum: null,

    read(number1, number2){
     number1 = +prompt('enter the number pls');
     number2 = +prompt('enter the second number pls');

     this.firstNum = number1;
     this.secondNum = number2;

      if (number1 === isNaN) return alert('value 1 is not a number');
      if (number2 === isNaN) return alert('value 2 is not a number');
    },

    sum(){
     return this.firstNum + this.secondNum;
    },

    mul(){
     return this.firstNum * this.secondNum;
    }


  }


  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


}())


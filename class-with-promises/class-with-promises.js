class Calculator {
  constructor(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }

  addition() {
    return this.numberOne + this.numberTwo;
  }

  subtract() {
    return   this.numberOne - this.numberTwo;
  }
}

const operation = new Calculator(1, 2);

Calculator.prototype.anwer = async function(selection){
   if( selection === 1) {
    const result = await operation.addition();
    return result 
  }  else if(selection === 2){
    const result = await operation.subtract();
    return result
  }
}


operation.anwer(2).then(data);
operation.anwer(1).then(data);

function data (data) {
   console.log(data)
}


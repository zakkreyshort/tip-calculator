export class Calculator {
  constructor(totalCost) {
    this.totalCost = totalCost;

  }

  convertFloat(){
    if(isNaN(this.totalCost)){
      return "Error";
    } else{
        this.totalCost = parseFloat((this.totalCost).toFixed(2));
      }
    }

  checkNegative(){
    this.totalCost = parseFloat((this.totalCost).toFixed(2))
    if(this.totalCost < 0){
      return "Error";
    }
  }
  };



  

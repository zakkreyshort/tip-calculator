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

  calculateTen() {
    this.totalCost = parseFloat((this.totalCost * 0.10).toFixed(2))
    return this.totalCost;
  }

  calculateFifteen() {
    this.totalCost = parseFloat((this.totalCost * 0.15).toFixed(3))
    return this.totalCost;
  }
  };



  

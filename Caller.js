const boubleSort =  require("./boubleSort")
const performance = require("performance-now")

class Caller {
    constructor(algorithm, input, quantity, inputType) {
       
        this._algorithm = algorithm;
        this._input = input;
        this._quantity = quantity;
        this._inputType= inputType;
    }
  
    async callBubbleSortWithQuantity(){
        var start = performance()     
        let output = this._input
        for (let index = 0; index < this._quantity; index++) {
            await boubleSort.bubbleSort(this._input)      
        }
       
        const used = process.memoryUsage();
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: this._input, type: this._algorithm, data_type: this._inputType, output:output, performance: used}
    
        return result    
    }
}


module.exports = Caller;
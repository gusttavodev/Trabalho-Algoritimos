const performance = require("performance-now")

function quickSort(origArray) {
    if (origArray.length <= 1) { 
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}

module.exports = {
    async callQuickSort(data){
      var start = performance()     
      let val = await quickSort(data)       
      var end = performance()
      const duration = (end - start).toFixed(3)
      
      const result = {duration: duration, value: val}
      return result     
    }
  }
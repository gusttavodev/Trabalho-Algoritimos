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
      let val = await quickSort(data.value)       
      var end = performance()
      const duration = (end - start).toFixed(3)
      
      const result = {duration: duration, value: val, type: "QuickSort", data_type: data.type}
      return result     
    },

    async callQuickSortWithQuantity(data, quantity){
        var start = performance()  

        for (let index = 0; index < quantity; index++) {
            await quickSort(data.value)      
        }   

        const used = process.memoryUsage();
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "QuickSort", data_type: data.type,
            rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`, 
            heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
            external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
        }
        return result     
    }
  }
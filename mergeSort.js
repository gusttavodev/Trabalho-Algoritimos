const performance = require("performance-now")
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; 
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}
function mergesort (unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
    return merge(
        mergesort(left), mergesort(right)
    );
  }
module.exports = {
    async callMergesort(data){
        var start = performance()        
        let val = await mergesort(data.value)        
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: val, type: "MergeSort", data_type: data.type}
        return result          
    },

    async callMergesortWithQuantity(data, quantity){
        let localData = [...data.value];
        let response = []
        var start = performance()        
        
        for (let index = 0; index < quantity; index++) {
            response = await mergesort(localData)      
        }
        
        const used = process.memoryUsage();
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "MergeSort", data_type: data.type, output: response,
            rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`, 
            heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
            external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
        }
        return result          
    }
}

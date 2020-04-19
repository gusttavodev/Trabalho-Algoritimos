const performance = require("performance-now")

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
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
        let localData = [...data.value];
        
        var start = performance()  

        for (let index = 0; index < quantity; index++) {
            await quickSort(localData, 0, localData.length - 1)      
        }   

        const used = process.memoryUsage();
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "QuickSort", data_type: data.type, output: localData,
            rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`, 
            heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
            external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
        }
        return result     
    }
  }
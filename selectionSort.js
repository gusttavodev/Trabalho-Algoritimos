const performance = require("performance-now")

function selectionSort(array){
    for(var i = 0; i < array.length; i++){
      var min = i;
      for(var j = i+1; j < array.length; j++){
        if(array[j] < array[min]){
         min = j;
        }
      }
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
    return array;
  };


module.exports = {
    async callSelectionSort(data){
        var start = performance()        
        let val = await selectionSort(data.value)

        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "InsertionSort", data_type: data.type}
        return result         
    },

    async callSelectionSortWithQuantity(data, quantity){
        var start = performance()   

        for (let index = 0; index < quantity; index++) {
            await selectionSort(data.value)      
        }

        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "SelectionSort", data_type: data.type}
        return result         
    }
}

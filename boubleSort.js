const performance = require("performance-now")

function bubbleSort(a)
{    
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);   
    return x; 
} 

module.exports = {
  async callBubbleSort(data){
    var start = performance()     
    let val = await bubbleSort(data)    
    var end = performance()
    const duration = (end - start).toFixed(3)
    
    const result = {duration: duration, value: val}
    return result    
  }
}
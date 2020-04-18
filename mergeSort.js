const performance = require("performance-now")

function merge(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length) sortedArr.push(leftArr.shift());
    while (rightArr.length) sortedArr.push(rightArr.shift());
    return sortedArr;
}

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        var midpoint = parseInt(arr.length / 2);
        var leftArr = arr.slice(0, midpoint);
        var rightArr = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArr), mergesort(rightArr));
    }
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
        var start = performance()        
        
        for (let index = 0; index < quantity; index++) {
            await mergesort(data.value)      
        }
        
        const used = process.memoryUsage();
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "MergeSort", data_type: data.type,
            rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`, 
            heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
            external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
        }
        return result          
    }
}

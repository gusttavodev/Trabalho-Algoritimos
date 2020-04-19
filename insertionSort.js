const performance = require("performance-now")
function insertionSort(vetor)
{
    let n = vetor.length;
    for (let i=1; i<n; ++i)
    {
        let key = vetor[i];
        let j = i-1;
        while (j>=0 && vetor[j] > key)
        {
            vetor[j+1] = vetor[j];
            j = j-1;
        }
        vetor[j+1] = key;
    }
    return vetor;
}


module.exports = {
    async callInsertionSort(data){
        var start = performance()        
        let val = await insertionSort(data)

        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: val, type: "InsertionSort", data_type: data.type}
        return result         
    },

    async callInsertionSortWithQuantity(data, quantity){
        let localData = [...data.value];

        var start = performance()   

        for (let index = 0; index < quantity; index++) {
            await insertionSort(localData)      
        }

        const used = process.memoryUsage();
        var end = performance()
        const duration = (end - start).toFixed(3)
        
        const result = {duration: duration, value: data.value, type: "InsertionSort", data_type: data.type, output: localData,
            rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`, 
            heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
            external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
        }
        return result         
    }
}

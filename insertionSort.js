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
        
        const result = {duration: duration, value: val}
        return result         
    }
}

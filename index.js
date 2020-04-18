const boubleSort =  require("./boubleSort")
const insertionSort =  require("./insertionSort")
const mergeSort =  require("./mergeSort")
const quickSort =  require("./quickSort")
const selectionSort =  require("./selectionSort")

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function main(){
    //0 randomnData
    //1 ordenateData
    //2 invertOrdenation
    const data = []
    data[0] = {value: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], type: "Valores desordenados"}
    data[1] = {value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], type: "Valores ordenados"}
    data[2] = {value: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], type: "Valores ordenados decrescente"}

    const executionQunatity = 10000

    let executionResult = []
    for (let index = 0; index < data.length; index++) {
        executionResult.push(await boubleSort.callBubbleSortWithQuantity(data[index], executionQunatity))
        executionResult.push(await insertionSort.callInsertionSortWithQuantity(data[index], executionQunatity)) 
        executionResult.push(await mergeSort.callMergesortWithQuantity(data[index], executionQunatity))      
        executionResult.push(await quickSort.callQuickSortWithQuantity(data[index], executionQunatity))   
        executionResult.push(await selectionSort.callSelectionSortWithQuantity(data[index], executionQunatity))        
    }
    
    console.log("Result", executionResult[2].value);
    
    const used = process.memoryUsage();
    const cvsData = []
    for (let index = 0; index < executionResult.length; index++) {       
        cvsData.push({
            algoritimo: executionResult[index].type,
            entrada: executionResult[index].data_type,
            valor_de_entrada: executionResult[index].value.toString(),
            tempo_de_execução: `${executionResult[index].duration} ms`,
            tempo_medio: `${(executionResult[index].duration/executionQunatity).toFixed(9)} ms`,
            execution_quantity: executionQunatity,
        })
    } 

    
    console.log(`Uso de memoria \n`);
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }

    const csvWriter = createCsvWriter({
        path: 'result.csv',
        header: [
          {id: 'algoritimo', title: 'Algoritimo'},
          {id: 'entrada', title: 'Entrada'},
          {id: 'valor_de_entrada', title: 'Valor de entrada'},
          {id: 'tempo_de_execução', title: 'Tempo de execução Total'},
          {id: 'tempo_medio', title: 'Média de execução individual'},
          {id: 'execution_quantity', title: 'Quantidade de execuções'},
        ]
      });

    csvWriter
        .writeRecords(cvsData)
        .then(()=> console.log('\nUm arquivos .cvs foi gerado na raiz do projeto com as informações'));
}

main()

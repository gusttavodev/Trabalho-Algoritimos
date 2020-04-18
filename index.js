const boubleSort =  require("./boubleSort")
const insertionSort =  require("./insertionSort")
const mergeSort =  require("./mergeSort")
const quickSort =  require("./quickSort")

async function main(){
    const data = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

    const bubbleSortDuration = await  boubleSort.callBubbleSort(data)
    console.log(`BubbleSort ${bubbleSortDuration.duration} milisegundos`);    

    const insertionSortDuration = await insertionSort.callInsertionSort(data)
    console.log(`Insertion Sort ${insertionSortDuration.duration} milisegundos`);    

    const mergeSortDuration = await mergeSort.callMergesort(data)
    console.log(`Merge Sort ${mergeSortDuration.duration} milisegundos`);  
    
    const quickSortDuration = await quickSort.callQuickSort(data)
    console.log(`Quick Sort ${quickSortDuration.duration} milisegundos`);  
}

main()

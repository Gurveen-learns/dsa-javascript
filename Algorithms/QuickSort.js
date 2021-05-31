//BigO => O(nlogn),Average    O(n^2),worst case - when array is already sorted

/****  Swap helper function *******/
function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

/****  Pivot helper function *******/
function pivot(arr, start = 0, end = arr.length + 1){
    let pivotVal = arr[start]
    let swapIndex = 0
    for(let i = start + 1; i < arr.length; i++){
        if(pivotVal > arr[i]){
          swapIndex++
          swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

/*******  QuickSort  ***************/
function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr,pivotIndex+1, right)
    }

    return arr
}


// BigO => O(n^2) but lesser swaps than bubble sort 
function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        
        /*Looping the unsorted array from end to first,
         unless the we find a value smaller than the currentVal then 
         we insert the currentVal at position j+1*/
        let j = i - 1
        while(j >= 0 && arr[j] > currentVal){
            //Copying the value of a[j] at position j+1
            arr[j+1] = arr[j]
            j--
        }
        //Inserting the currentVal 
        arr[j+1] = currentVal
    }

    return arr
}


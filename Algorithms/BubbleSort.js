//BigO => n^2   Lower Bound => O(1)
function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

function bubbleSort(arr){

    for(let i = arr.length; i > 0; i--){       
        for(let j = 0; j < i - 1; j++){           
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }

    return arr
}

//Optimizer Bubble Sort for nearly Sorted Arrays
function optimizedBubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){  
        let noSwaps = true     
        for(let j = 0; j < i - 1; j++){                   
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}


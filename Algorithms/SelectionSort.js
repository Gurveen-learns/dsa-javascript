//BigO => O(n^2)
function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){

        let minIndex = i

        for(let j = i + 1; j < arr.length; j++){
          if(arr[j] < arr[minIndex])  minIndex = j        
        }

        if(minIndex !== i) swap(arr, i, minIndex)
            
    }

    return arr 
}


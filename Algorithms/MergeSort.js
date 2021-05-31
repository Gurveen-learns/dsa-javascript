//BigO => O(nlogn)

//Merge two sorted arrays
function merge(arr1, arr2){
    let i = 0
    let j = 0
    let newArr = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])           
            i++           
        }else if(arr1[i] > arr2[j]){
            newArr.push(arr2[j])
            j++           
        }else{
             newArr.push(arr1[i])
             newArr.push(arr2[j])
             i++           
             j++             
        }
    }
   
    if(i < arr1.length){
        newArr = newArr.concat(arr1.slice(i))         
    }else if(j < arr2.length){
       newArr = newArr.concat(arr2.slice(j))          
    }

    return newArr
}

/*******  MergeSort  *********/
function mergeSort(arr){
    if(arr.length <= 1) return arr
    
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}


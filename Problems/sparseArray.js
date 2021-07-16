function countStr(arr,str){
    let count = 0
    arr.forEach(el => {
        if(el === str){
            count++
        }
    })

    return count
}

function matchingStrings(arr, queries) {
    // Write your code here
    let newArr = []
    queries.forEach(q => newArr.push(countStr(arr,q)))
    return newArr
}

matchingStrings(['def','de','fgh'],['de','ab','fgh'])
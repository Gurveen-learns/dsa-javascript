function hourSum(arr,rStart,cStart){
    let sum = 0
    for(let i = rStart; i < rStart + 3; i++){
        for(let j = cStart; j < cStart + 3; j++){
            if(i === rStart+1){
                if(j === cStart + 1){
                  sum += arr[rStart+1][cStart + 1]
                }
            }else{
                sum += arr[i][j]
            }
         }
    }

    return sum
}

function hourglassSum(arr){
    let sumArr = []
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = 0; j < arr.length - 2; j++){
            let result = hourSum(arr,i,j)
            sumArr.push(result)
        } 
    }

    return sumArr
}

hourglassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],
[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]])
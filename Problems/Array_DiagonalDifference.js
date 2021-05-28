function diagonalDifference(arr){
    let p = 0
    let s = 0
    for(let i = 0; i < arr.length; i++){
        p += arr[i][i]
        s += arr[i][arr.length - 1 - i] 
    }

    return Math.abs(p - s)
}

let myArr = [[1,2,5],[1,2,3],[1,2,3]]

diagonalDifference(myArr)

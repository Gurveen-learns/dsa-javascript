//BigO => O(nk), where k is maximum no of digits in arr

//Returns digit at given position in a number
function getDigit(num, position){
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10
}

//Returns number of digits in given number
function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

//Returns maximum number of digits in an array
function mostDigits(nums){
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

/*******  Radix Sort  *********/
function radixSort(arr){
    let maxDigitCount = mostDigits(arr)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k)
            digitBuckets[digit].push(arr[i])
        }

        arr = [].concat(...digitBuckets)
    }

    return arr
}


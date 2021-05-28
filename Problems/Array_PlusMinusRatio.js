function plusMinus(arr){
    let total = arr.length
    let positive = 0
    let negative = 0
    let zero = 0

    for(let i = 0; i < total; i++){
        if(arr[i] > 0){
            positive++
        }else if(arr[i] < 0){
            negative++
        }else{
            zero++
        }
    }

    console.log((positive/total).toFixed(6))
    console.log((negative/total).toFixed(6)) 
    console.log((zero/total).toFixed(6))
    
}

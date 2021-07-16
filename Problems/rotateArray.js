function rotateLeft(d,arr){
    const newArr = []
    arr.forEach((el,i) => {
        let newPos = i - d 
        if(newPos < 0){
            newPos = arr.length + newPos
        }
        newArr[newPos] = el
    })

    return newArr
}

rotateLeft(4,[1,2,3,4,5])
//BigO Insertion,Remove - O(logN)  Searching - O(N)
function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

//     Insert
    insert(value){       
        this.values.push(value)
        let currentIdx = this.values.length - 1
        let currentVal = this.values[currentIdx]
       
        while(currentIdx > 0){
            let parentIdx = Math.floor((currentIdx - 1)/2)
            let parentVal = this.values[parentIdx]
            if(currentVal <= parentVal) break
            swap(this.values, currentIdx, parentIdx)
            currentIdx = parentIdx
        }        
        return this
    }
//  Max Extract 
 
    maxExtract(){
        if(this.values.length === 0) return undefined
        swap(this.values, 0 , this.values.length-1)
        let max = this.values.pop()
        
        let rootIdx = 0
        let current = this.values[0]
        let length = this.values.length        
        while(true){
            let i1 = 2*rootIdx + 1
            let i2 = 2*rootIdx + 2
            if(i1 < length || i2 < length){
               let ch1 = this.values[i1]
               let ch2 = this.values[i2]
               if(ch1 >= ch2 && current < ch1){
                   swap(this.values, rootIdx, i1)
                   rootIdx = i1
               }else if(current < ch2){
                   swap(this.values, rootIdx, i2)
                   rootIdx = i2
               }else{
                   break
               }
            }else{
                break
            }
        }
        return this
    }
}

let bh = new MaxBinaryHeap()

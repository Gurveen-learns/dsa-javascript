function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

class Node{
    constructor(value,priority){
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }

//     Enqueue
    enqueue(val, priority){
        let newNode = new Node(val,priority)
        this.values.push(newNode)
        
        if(this.values.length === 1) return this
        let currentIdx = this.values.length - 1
        let currentPr = this.values[currentIdx].priority
        while(currentIdx > 0){
            let parentIdx = Math.floor((currentIdx - 1)/2)
            let parentPr = this.values[parentIdx].priority
            if(parentPr <= currentPr) break
            swap(this.values, currentIdx, parentIdx)
            currentIdx = parentIdx
        }

        return this 
    }

//     Dequeue
       dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let priorityQ = new PriorityQueue()
priorityQ.enqueue("Fever", 5)
priorityQ.enqueue("Shot", 1)
priorityQ.enqueue("Headache", 4)
priorityQ.enqueue("Accident", 2)
priorityQ.enqueue("Concussion", 3)




/////////////PriorityQueue Start///////////////////////////
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
/////////////PriorityQueue End///////////////////////////


/////////////WeightedGraph Start/////////////////////////
class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
        return this.adjacencyList
    }

    addEdge(v1,v2,weight){
        if(!this.adjacencyList[v1]) this.adjacencyList[v1] = []
        if(!this.adjacencyList[v2]) this.adjacencyList[v2] = []        
        this.adjacencyList[v1].push({node: v2,weight})
        this.adjacencyList[v2].push({node: v1,weight})
        return this.adjacencyList
    }

    /////////////Dijkstra's Start//////////////
   Dijkstra(start,end){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        const path = []

        //build up intial list
        for(let vertex in this.adjacenyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex] = Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex] = null
        }

        //As long there is something in PQ
        let smallest;     
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === end){
                //Done //FINISH
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbour of this.adjacenyList[smallest]){
                    //Calculate new distance to neighbouring node
                    let candidate = distances[smallest] + neighbour.weight
                    if(candidate < distances[neighbour.node]){
                        //Updating new smallest distance to neighbour
                        distances[neighbour.node] = candidate
                        //Updating previous
                        previous[neighbour.node] = smallest
                        //enqueue in priority queue with new priority
                        nodes.enqueue(neighbour.node,candidate)
                    }
                }
            }
        }

        return path.concat(smallest).reverse()
    }
    /////////////Dijkstra's End/////////////////
}
///////////////////WeightedGraph End ///////////////////////

let g = new WeightedGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")

g.addEdge("A","B",4)
g.addEdge("A","C",1)
g.addEdge("B","C",3)
g.addEdge("C","D",3)
g.addEdge("A","D",2)
g.addEdge("D","E",4)









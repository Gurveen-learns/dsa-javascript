class PriorityQueue{
    constructor(){
        this.values = []
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority)
    }
    enqueue(val,priority){
        this.values.push({val,priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
}

class WeightedGraph{
    constructor(){
        this.adjacenyList = {}
    }

//  Add Vertex
    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex] = []
        }

        return this.adjacenyList
    }

//  Add Edge
    addEdge(v1,v2,weight){
        if(!this.adjacenyList[v1]){
            this.adjacenyList[v1] = []
        }
        if(!this.adjacenyList[v2]){
            this.adjacenyList[v2] = []
        }
        this.adjacenyList[v1].push({node: v2,weight})
        this.adjacenyList[v2].push({node:v1,weight})
        return this.adjacenyList
    }

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
}


// let graph = new WeightedGraph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")

// graph.addEdge("A","B",4)
// graph.addEdge("A","C",2)
// graph.addEdge("B","E",3)
// graph.addEdge("C","D",2)
// graph.addEdge("C","F",4)
// graph.addEdge("D","E",3)
// graph.addEdge("D","F",1)
// graph.addEdge("E","F",1)



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

g.Dijkstra("B","E")





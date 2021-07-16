class Graph{
    constructor(){
        this.adjacenyList = {}
    }

//     Add Vertex
    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
           this.adjacenyList[vertex]  = []
        }
        return this
    }

//     Add Edge
    addEdge(v1,v2){
        if(!this.adjacenyList[v1]){
            this.adjacenyList[v1] = []
        }
        if(!this.adjacenyList[v2]){
            this.adjacenyList[v2] = []
        }
        this.adjacenyList[v1].push(v2)
        this.adjacenyList[v2].push(v1)
        return this.adjacenyList
    }

//     Remove Edge
    removeEdge(v1,v2){
        if(!this.adjacenyList[v1] || !this.adjacenyList[v2]) return

        if(this.adjacenyList[v1].includes(v2)){
            this.adjacenyList[v1] = this.adjacenyList[v1].filter(x => x !== v2)
            this.adjacenyList[v2] = this.adjacenyList[v2].filter(x => x !== v1)            
        }
        return this.adjacenyList
    }

//  Remove Vertex
    removeVertex(vertex){
        if(!this.adjacenyList[vertex]) return
        
        let vertexArr = this.adjacenyList[vertex]
        for(let i = 0; i < vertexArr.length; i++){
            let key = vertexArr[i]
            this.removeEdge(key,vertex)
        }

        delete this.adjacenyList[vertex]

        return this.adjacenyList
    }   

//     Depth First Search (Recursively)
    dfsRecursive(start){          
        let results = []
        let visited = {}
        let adjacenyList = this.adjacenyList
        
        function traverse(vertex){
            if(!vertex) return null
            results.push(vertex)
            visited[vertex] = true
            adjacenyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return traverse(neighbour)
                }
            })
        }

        traverse(start)
        return results
    }
//     Depth First Search Iteratively
    dfsIterative(start){
        let stack = []
        let data = []
        let visited = {}
       
        stack.push(start)
        while(stack.length){
            let vertex = stack.pop()
            if(!visited[vertex]){
                data.push(vertex)
                visited[vertex] = true
            }
            this.adjacenyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    stack.push(neighbour)
                }
            })
        }
        return data
    }

//     Breadth First Search
    bfs(start){
        let queue = []
        let data = []
        let visited = {}

        queue.push(start)
        while(queue.length){
            let vertex = queue.shift()
            if(!visited[vertex]){
                data.push(vertex)
                visited[vertex] = true
            }

            this.adjacenyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    queue.push(neighbour)
                }
            })
        }

        return data
    }
}

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.dfsIterative('A')
g.bfs('A')










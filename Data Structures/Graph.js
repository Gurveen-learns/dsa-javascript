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
}

let graph = new Graph()



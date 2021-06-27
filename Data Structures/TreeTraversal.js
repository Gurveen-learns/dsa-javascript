class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    //Insert--------------------//
    insert(value){
        let newNode = new Node(value)      
        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(value === current.value) return this
            if(value < current.value){
                if(!current.left){
                    current.left = newNode
                    return this
                }
                current = current.left
            }else{
                if(!current.right){
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    //find--------------------//
    find(value){
        if(!this.root) return false

        let current = this.root
        while(true){
            if(value === current.value) return current
            if(value < current.value){
                if(!current.left) return false
                current = current.left

            }else{
                if(!current.right) return false
                current = current.right
            }
        }
    }

    //Breadth First Search-------------//
    bfs(){
        let node = this.root
        let queue = []
        let data = []
        queue.push(node)
        while(queue.length){           
           node = queue.shift()
           data.push(node.value)
           if(node.left) queue.push(node.left)
           if(node.right) queue.push(node.right)
        }

        return data
    }

    //Depth First Search - PreOrder -------------//
    dfsPreOrder(){
        let data = []
        let current = this.root

        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }

        traverse(current)
        return data
    }

    //Depth First Search - PostOrder -------------//
    dfsPostOrder(){
        let data = []
        let current = this.root

        function traverse(node){           
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        
        traverse(current)
        return data
    }

    //Depth First Search - InOrder -------------//
    dfsInOrder(){
        let data = []
        let current = this.root

        function traverse(node){           
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)           
        }
        
        traverse(current)
        return data
    }
}


let bst = new BinarySearchTree()
bst.insert(13)
bst.insert(6)
bst.insert(12)
bst.insert(3)
bst.insert(20)
bst.insert(16)
bst.insert(25)


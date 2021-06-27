//BigO -> Insertion and Find  -> logn
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

    //Insert----------------//
    insert(value){
        let newNode = new Node(value)

        if(!this.root){
            this.root = newNode
            return this
        }
        
        let current = this.root
        while(true){
            if(value === current.value) return undefined
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

    //find-------------------//
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
}

let bst = new BinarySearchTree()
bst.insert(13)
bst.insert(20)
bst.insert(10)
bst.insert(17)
bst.insert(35)
bst.insert(5)
bst.insert(12)






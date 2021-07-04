class HashTable{
    constructor(size){
        this.keyMap = Array(size = 53)
    }

//     Hash Function
    _hash(key){
       let total = 0
       let WEIRD_PRIME = 31
       for(let i = 0; i < Math.min(key.length, 100); i++){
           let char = key[i]
           let charValue = char.charCodeAt(0) - 96
           total = (total * WEIRD_PRIME + charValue) % this.keyMap.length 
       }
       return total
    } 

//     Set
    set(key,value){
        let index = this._hash(key)       
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value])
        return this        
    }

//     Get
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            let arr = this.keyMap[index]            
            for(let i = 0; i < arr.length; i++){
               if(arr[i][0] === key){
                   return arr[i][1] //return value
               } 
            }
            return val
        }
            return undefined        
    }

//    Keys
    keys(){
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            let subArr = this.keyMap[i]
            if(subArr){
                for(let j = 0; j < subArr.length; j++){
                    keysArr.push(subArr[j][0])
                }
            }
        }

        return [...new Set(keysArr)]
    }

//     Values
    values(){
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            let subArr = this.keyMap[i]
            if(subArr){
                for(let j = 0; j < subArr.length; j++){
                    valuesArr.push(subArr[j][1])
                }
            }
        }

        return [...new Set(valuesArr)]
    }
   
}



let ht = new HashTable()
ht.set('name','John')
ht.set('age','30')
ht.set('country','US')
ht.set('food','pizza')
ht.set('drink','coke')
ht.set('movie','Lion King')
ht.set('movie','Lion')
ht.set('drink','c')
ht.set('asd','coke')
ht.set('afad','pizza')

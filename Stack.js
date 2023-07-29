class Node {
    constructor(val) {
        this.val = val;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    push(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head = new_node
            return this
        }
        if(this.head.next == null){
            this.head.next = new_node
            return this
        }
        let runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        runner.next = new_node
    
    }
    top(){
        let runner = this.head
        while(runner){
            if (!runner.next){
                return runner.val
            }
            runner = runner.next
        }
    }
    isempty(){
        if (!this.head){
            return "empty"
        }
        return "not empty"
    }
    pop(){
        let runner = this.head
        while(runner){
            if (!runner.next){
                let temp = runner.val 
                runner = null
                return temp
            }
        runner = runner.next
        }
    }
    contains(val) {
    	// is "value" to be found anywhere in this list?
        let runner=this.head
        while(runner !== null){
            if (runner.data === value) {
                return true
            }else{
                runner=runner.next
            }
        }
        return false
    }
    size(){
        if (!this.head){
            return 0
        }
        let runner = this.head
        let counter = 0
        while(runner){
            counter = counter + 1
            runner = runner.next
        }
        return counter
    } 
    copy(){
        
    }
}
function CompQueues(List1, List2){
    let runner1 = List1.head
    let runner2 = List2.head
    let arr1 = []
    let arr2 = []
    while(runner1 && runner2){
        arr1.push(runner1.val)
        arr2.push(runner2.val)
        runner1 = runner1.next
        runner2 = runner2.next
    }
    match = true
    for (i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            match = false
            break
        }
    }
    return match     
}


let mySLL = new LinkedList()
mySLL.push(1)
mySLL.push(2)
mySLL.push(3)
mySLL.push(4)
mySLL.push(5)

console.log(mySLL.pop())
console.log(mySLL)

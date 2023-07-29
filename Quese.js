class Node {
    constructor(val) {
        this.val = val;
        this.next = null;              
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    Enqueue(val){
        let new_node = new Node(val);
        
        if (!this.head){
            this.head = new_node
            return this;
        }

        if(this.head.next == null){
            this.head.next = new_node
            return new_node
        }
        let runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        runner.next = new_node
        new_node.next = this.tail
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
               this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
          // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }
    isEmpty(){
        if (!this.head){
            return "empty"
        }
        return "not empty"
    }
    dequeue(){
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, return null
        if(!this.head) {
            return null;
        }
        
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
          
    }
    contains(val){
        if (!this.head){
            return null
        }
        let runner = this.head
        while(runner){
            if (runner.val === val){
                return true
            }
            runner = runner.next
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
    removeMin(){
        let runner = this.head
        let min = this.head.val
        while(runner){
            if (runner.val < min ){
                min = runner.val
            }
            runner = runner.next
        }
        console.log(min)
        if(this.head.val == min){
            this.head = this.head.next
        }
        let runner2 = this.head 
        let prev = null
        while(runner2 != null){
            let nxt = runner2.next
            if(runner2.val == min){
                prev.next = nxt
            }
            else{
                prev = runner2
            }
            runner2 = nxt
        }
        return this
        
    }
    interLeave(){

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



let List1 = new LinkedList()

List1.Enqueue(4)
List1.Enqueue(1)
List1.Enqueue(5)

console.log(List1.removeMin())

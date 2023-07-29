class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
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
    removeFront() {
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
    front(){
        return this.head.data;
    }
    display(){
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        return values
    }
    findSum() {
        //We first have to tell our train attendant that we want them to start at the front of the train
        let runner=this.head
        let sum=0
        //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
        //Also we need to tell them when to stop otherwise they will just run off the end of the train
        while(runner !== null){
            //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
             sum+=runner.data
            //Tell our attendant to move to the next car
            runner=runner.next
        }
        return sum
    }
    contains(value) {
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
    length() {
    	// how many nodes are in my list?
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        return values.length
    }
    max() {
    	// identify the largest value in the list
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        let max = values[0];  //here we have considered max to the first element because we don't know which is max yet.
        for (let i = 1; i < values.length; ++i) { 
            if (values[i] > max) {  //in each iteration it will compare if the value is greater than the current considered value (we just considered first element)
            max = values[i]; //in the above iteration if the testArray find value/element greater than max then this new max value will be considered as Max (this will happen until the max value found).
            }
        }
        return max
    }
    min() {
    	// identify the smallest value in the list
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        let min = values[0];  //here we have considered max to the first element because we don't know which is max yet.
        for (let i = 1; i < values.length; ++i) { 
            if (values[i] < min) {  //in each iteration it will compare if the value is greater than the current considered value (we just considered first element)
            min = values[i]; //in the above iteration if the testArray find value/element greater than max then this new max value will be considered as Max (this will happen until the max value found).
            }
        }
        return min
    }
    average() {
    	// what is the average value in my list?
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        let sum = values.reduce((a, b) => a + b, 0);
        let average = sum / (values.length)
        return average
    }
    back() {
    	// what is the last value in my SLL?
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        return values[values.length - 1]
    }
    removeBack() {
    	// remove last value, return new list
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        values.pop()
        return values
    }
    addBack(value) {
    	// create a node containing value, add it to back of my list
        let runner=this.head
        let values = []
        while(runner !== null){
            values.push(runner.data) 
            runner=runner.next
        }
        values.push(value)
        return values
    }
    addNodeBack(value){
        let new_node = new Node(value);
        if(this.head == null){
            return null
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
    
    }
    InsertPos( list , val , before) {
        head = this.head;
        if (position < 1)
           document.write("Invalid position");
 
       // if position is 1 then new node is
       // set infront of head node
       // head node is changing.
       if (position == 1) {
            newNode = new Node(data);
           newNode.nextNode = headNode;
           head = newNode;
       } 
       else
       {
           while (position-- != 0)
           {
               if (position == 1)
               {
                   // adding Node at required position
                    newNode = GetNode(data);
 
                   // Making the new Node to point to
                   // the old Node at the same position
                   newNode.nextNode = headNode.nextNode;
 
                   // Replacing current with new Node
                   // to the old Node to point to the new Node
                   headNode.nextNode = newNode;
                   break;
               }
               headNode = headNode.nextNode;
           }
           if (position != 1)
               document.write("Position out of range");
       }
       return head;
   }
   prependval(before, val){
        //if there is no head node then return null
        if(!this.head){
            return null
        }
        //if the head node is the val then change the head node's value to the "before" parameter and make the next node the former head's value  
        if(this.head.data == val){
            let new_node = new Node(before)
            new_node.next = this.head
            this.head = new_node
        }
        // if not then make the runner 
        let runner = this.head
        //while the node list is still not null
        while(runner.next != null){
            //if the runner reached the value the break the while loop
            if(runner.next.data == val){
                break
            }
            // else keep going
            runner = runner.next
        }
        if(runner.next == null){
            //if val not in list then print this
            console.log("Node not found")
        }
        else{
            // create a new_node that has a value of before
            let new_node = new Node(before)
            // makes the value after the new node the same as the value after the value
            new_node.next = runner.next
            // the value after the value is now equal to the new node
            runner.next = new_node
        }

    }
    agregarVal(after, val){
        //if there is no head node then return null
        if(!this.head){
            return null
        }
        //if the head node is the val then change the head node's value to the "before" parameter and make the next node the former head's value  
        if(this.head.data == val){
            let new_node = new Node(after)
            new_node.next = this.head
            this.head = new_node
        }
        // if not then make the runner 
        let runner = this.head
        //while the node list is still not null
        while(runner.next != null){
            //if the runner reached the value the break the while loop
            if(runner.data == val){
                break
            }
            // else keep going
            runner = runner.next
        }
        if(runner.next == null){
            //if val not in list then print this
            console.log("Node not found")
        }
        else{
            // create a new_node that has a value of before
            let new_node = new Node(after)
            // makes the value after the new node the same as the value after the value
            new_node.next = runner.next
            // the value after the value is now equal to the new node
            runner.next = new_node
            console.log(runner.next)
        }
    }
    Remove_Val(val){
        if(!this.head){
            return null
        }
        if(this.head.data == val){
            this.head = this.head.next
        }
        let runner = this.head 
        let prev = null
        while(runner != null){
            let nxt = runner.next
            if(runner.data == val){
                prev.next = nxt
            }
            else{
                prev = runner
            }
            runner = nxt
        }
        this.display()
    }
    createSList(){
        const prompt = require("prompt-sync")();
        const userInput = prompt("Enter the data for the new node:");
        const newData = new Node(userInput); // Assuming the data is an integer for this example

        

        // Step 4: Add the new node to the linked list
        this.addNodeBack(newData);
        
        

    }
    // createSList(){
    // //     const prompt = require("prompt-sync")();
    // //     let val = prompt("Input Node Value: ");
    // //     let new_node = new Node(val);
    // //     if(!this.head) {
    // //         this.head = new_node;
    // //     }
        
    // //     while (val){
    // //         //let data = prompt("Input Node Value: ");
            
    // //         // let new_node = new Node(val);
            
    // //         if (val !== 'Cancel'){
    // //             new_node.next = new Node(val)
    // //             this.createSList()
    // //         }
    // //         return this
            
    // //         
    // // //         if(!this.head) {
    // // //            this.head = new_node;
    // // //             
    // // //         }else{
    // // //             new_node.next = new Node(val)
    // // //         }
    // //     }
        
    
    //     return this
         
    // }

 
}

let mySLL = new LinkedList()
mySLL.addFront(1)
mySLL.addFront(2)
mySLL.addFront(3)
mySLL.addFront(4)
mySLL.addFront(5)
//console.log(mySLL)
//console.log(mySLL.agregarVal(28, 4))

let mySLL2 = new LinkedList()
mySLL2.createSList()
console.log(mySLL2.display())


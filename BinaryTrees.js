class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...
    add(val){
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if(val>runner.val) {
                    if(runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = new BTNode(val);
                        return this
                    }
                } else {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new BTNode(val);
                        return this
                    }
                }
            }
        }
        this.root = new BTNode(val);
        return this
    }
    contains(val){
        //establish runner
        let runner = this.root;
        //until null
        while (runner) {
            // runner is the value return true
            if (val == runner.val) {
                return true;
            }
            // if val is less than the node then go left
            if (val < runner.val) {
                // if no left then node then return false
                if (!runner.left) {
                    return false;
                }
                // if there is a node in the left tree then go left
                runner = runner.left;
            // if value is greater then go to the right
            } else {
                // if no node to the right then return false
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }
    Min(){
        if (this.root){
            let runner = this.root;
            while (runner){
                if (runner.left){
                    runner = runner.left
                }
                else{
                    return runner.val
                }
            }
        }
        return null
    }
    Max(){
        if (this.root){
            let runner = this.root;
            while (runner){
                if (runner.right){
                    runner = runner.right
                }
                else{
                    return runner.val
                }
            }
        }
        return null
    }
    Size(){
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root);
    }
    isEmpty(){
        if (this.root === null) {
            return true;
        }
        return false
    }
    Height(){
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            if (sizeHelp(runner.left)> sizeHelp(runner.right)){
                return sizeHelp(runner.left) + 1
            }else{
                return sizeHelp(runner.right) + 1
            }
        }
        return sizeHelp(this.root);
    }
    isbalanced(){
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            if (sizeHelp(runner.left) === sizeHelp(runner.right) 
                || (sizeHelp(runner.left) + 1) === sizeHelp(runner.right)
                || sizeHelp(runner.left)  === (sizeHelp(runner.right) + 1)){
                return true
            }else{
                return false
            }
        }
        return sizeHelp(this.root);
    }
    arrayToTree( array){
        for (let i = 0; i < array.length; i++){
            this.add(array[i])
        }
        return this
    }
    closesetCommonAncestor(val1, val2){
        if (!this){
            return null
        }
        let runner = this.root
        while(runner){
            if (val1 < runner.val && val2 < runner.val){
                runner = runner.left
            }else if (val1 > runner.val && val2 > runner.val){
                runner = runner.right
            }else{
                return runner.val
            }
        }
        return "no ancestors found";
    }
    
    preOrderTraversal(runner = this.root){
        let arr = []
        if (runner !== null){
            arr.push(runner.val)
            arr.push(...this.preOrderTraversal(runner.left))

            arr.push(...this.preOrderTraversal(runner.right))        
        }
        return arr
        //example:
        //const [1,2,3,4]
        //   ^
        //   |
        //const [x,y, ...z]
    }

    postOrderTraversal(runner = this.root){
        let arr = []
        if (runner !== null){
            
            arr.push(...this.postOrderTraversal(runner.left))

            arr.push(...this.postOrderTraversal(runner.right))   
            arr.push(runner.val)     
        }
        return arr
    }
    inOrderTraversal(runner = this.root){
        
    }
    preOrderBSTtoLinkedList(root = this.root.val){
        let prev = null
        const traverse = node => {
            if(node === null)   return
            traverse(node.right)
            traverse(node.left)
            node.left = null
            node.right = prev
            prev = node
        }
        traverse(root)
    }
    postOrderBSTtoLinkedList(){

    }
    inOrderBSTtoLinkedList(){

    }
    minHeight(){
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            if (sizeHelp(runner.left)< sizeHelp(runner.right)){
                return sizeHelp(runner.left) + 1
            }else{
                return sizeHelp(runner.right) + 1
            }
        }
        return sizeHelp(this.root);
    }
    preOrderTraversalnoRecurrsion(){

    }
    remove(){
        
    }
}

let Tree = new BST()

Tree.add(25)
Tree.add(30)
Tree.add(35)
Tree.add(28)
Tree.add(33)
Tree.add(40)
Tree.add(10)
Tree.add(5)
Tree.add(15)

//console.log(Tree)
//console.log(Tree.root)
let Tree2 = new BST()

console.log(Tree.preOrderBSTtoLinkedList())

// array = [1,2,3,4,5]
//Tree2.arrayToTree(Tree2, array)
//console.log(Tree2)
// let arr = [1, 2, 3, 4];
// const num = 4;
// index = 1;

function pushFront(arr, num ) {
    for (i = arr.length; i >= 0; i--){
        arr[i] = arr[i - 1]
    }
    arr[0] = num
    return arr
}

//console.log(pushFront(arr, num));

function popFront(arr){
    let firstValue = arr[0]
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length -1
    console.log(arr)

    return firstValue
}

//console.log(popFront(arr))

function insertAt(arr, index, num){
    for (i = arr.length; i >= index; i--){
        arr[i] = arr[i - 1]
    }
    arr[index] = num
    return arr
}

//console.log(insertAt(arr,index, num))

 function removeAt(arr, index){
    let removeEle = arr[index]
    for (i = index; i < arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length -1
    console.log(arr)
    return removeEle
}

//console.log(arr)
//console.log(removeAt(arr, index))
let arr3 = [2, 3, 5, 6]

function swapPairs(arr){
    for (i = 0; i < arr.length; i + 2){
        arr[i] = arr[i + 1]
    }
    console.log(arr)
    return arr
}

//console.log(swapPairs(arr))

let arr2 = [-2,-2,3.14,5,5,10]


function duplicates(arr2){
    for (let i = arr.length - 1; i >=0; i--){
        if (arr[i] == arr[i - 1]){
        	    arr.splice(i, 1)
        	}
        }
        return arr
	}

//console.log(duplicates(arr2))

function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

//console.log(minToFront([4,2,1,3,5]))


//let  = [1,2,3,4]


function reverseArray(arr){
    for(let i = arr.length - 1; i >= 0; i--) {
        
        arr[i] = arr[i - 1]
        arr.push(arr[i])
      }
    
    return arr
}

//console.log(reverseArray(arr))

function rotateArr(arr, moveBy) {
  var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        /* Handle rotations to the right */
        // Loop through all the rotations
        for (var i = 0; i < actualMovementsNeeded; i++) {
            // Handle the single rotation
            var temp = arr[arr.length - 1];
            // Loop moves items to the right one index
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; // Put temp value at the beginning of the array
        }
    } else {
        /* Handle rotations to the left */
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            // Loop moves items to the left one index
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
                // console.log(arr);
            }
            arr[arr.length - 1] = temp; // Put temp value at end of array
            // console.log("Array after this rotation:",arr);
        }
    }
}

function removeNegativeNumbers(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            for (var j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
        } else {
            i++;
        }
    }
    return arr;
}

var arr = [2, -1, -3, 4];
//console.log(removeNegativeNumbers(arr)); // Output: [2, 4]

function secondToLast(arr){

    return arr[arr.length - 2]
}

//console.log(secondToLast([42,true,4,"Kate",7])

function secondLargest(arr){
    //Outer pass
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr[arr.length - 2];
}

//console.log(secondLargest([42,1,4,Math.PI,7]))

function nthToLast(arr, nth){
    return arr[arr.length - nth]
}

console.log(nthToLast([42,true,4,"Kate",7], 3))

function nthLargest(arr, nth){
    //Outer pass
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr[arr.length - nth];
}

console.log(nthLargest([5,2,3,6,4,9,7],3))

function romoveRange(arr, range){
    
    let removeEle = arr[index]
    for (i = index; i < arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length -1
    console.log(arr)
    return removeEle



    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            for (var j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
        } else {
            i++;
        }
    }
    return arr;
}
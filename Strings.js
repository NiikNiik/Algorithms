let str = "Waffles are good";
let str2 = "abc8c0d1ngd0j0!8";



function removeBlanks(str){
    str = str.split(" ")
    str = str.join("")
    return str
}

//console.log(removeBlanks(str));

function getDigits(str){
    arr = str.split("")
    arr2 = []
    for (i = 0; i < arr.length; i++){
        if (isNaN(arr[i])){
            
        }
        else{
            arr2[i] = arr[i];
        }
    }
    str2 = arr2.join("")
    return str2
}

//console.log(getDigits(str2));

function acronym(str){
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase();
    }
    words = words.join("")
    return words

}

//console.log(acronym(str))

function nonSpace(str){
    str = str.split(" ")
    str = str.join("")
    return str.length 
}

//console.log(nonSpace("Honey pie, you are driving me crazy"))

function removeShorterStrings(arr, num){
    arr2 = []
    for (i = 0; i < arr.length ; i++){
        if (arr[i].length >= num){
            //console.log(arr[i])
            arr2.push(arr[i])
        }
        else{

        }
    }
    return arr2
}

//console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))

function reverseString(str){
    str = str.split("")
    str2 = []
    for(let i = str.length; i >= 0; i--) {
        
        str[i] = str[i - 1]
        str2.push(str[i])
      }
    
    str2 = str2.join("")
    return str2
}

console.log(reverseString("creature"))

function RemoveEvenLengthStrings(str){
    
}
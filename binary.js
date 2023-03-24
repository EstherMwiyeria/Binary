
// Merge and Binary Search
// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6

function mergeSortTopDown(numB){
    if(numB.length<=1){
        return num
    }
    const middle=Math.floor(numB.length/2)
    const left=numB.slice(0,middle)
    const right=numB.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const numC=[];
    while(left.length && right.length ){
        if (left <=right) {
        numC.push(left.shift())
    }
    else{
        numC.push(right.shift())
    }
    return numC.concat(left.slice()).concat(right.slice())
}

}
function binary(num7,target){
let left=0;
    let right =num7.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (num7[middle] ===target){
            return middle
        }
        else if(num7[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let num = [45,12,6,89,2,5]

        let num7=mergeSortTopDown(num)
let target=6;
console.log(binary(num7,target))
 

// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
let arr=[123,89,5,23,9,56]
let arrFinal=arr.sort(function(a,b)
{return a-b})
console.log(arrFinal.reverse())
// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];
function mergeSortTopDown(arr2){
    if(arr2.length<=1){
        return arr2
    }
    const one=Math.floor(arr2.length/2)
    const two=arr2.slice(0,one)
    const three=arr2.slice(one)
    return mergeTopDown(mergeSortTopDown(two),mergeSortTopDown(three))
}
function mergeTopDown(two,three){
    const arr6=[];
    while(two.length && three.length ){
        if (two <=three) {
        arr6.push(two.shift())
    }
    else{
        arr6.push(three.shift())
    }
    return arr6.concat(two.slice()).concat(three.slice())
}

}
function binary(arr7,target){
let two=0;
    let three =arr7.length-1;
    while(two<=three){
        let middle=Math.floor((two+three)/2);
        if (arr7[middle] ===target){
            return middle
        }
        else if(arr7[middle]< target){
            two=middle + 1;

        }
        else{
            three= middle - 1;
        }
    }
    return null
    }
    let arr2 = [1,4,78,2,67,3];
    let array=mergeSortTopDown(arr2)
let target2=34;
console.log(binary(array,target2))
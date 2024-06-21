// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let pivot = arr[Math.floor(arr.length/2)];
//     let left = [];
//     let right = [];
//     let middle = [];
//     for(let element of arr){
//         if( element < pivot){
//             left.push(element);
//         } else if(element === pivot){
//             middle.push(element);
//         } else{
//             right.push(element);
//         }
//     }
//     return quickSort(left).concat(middle).concat(quickSort(right));
// }
// var arr = [3,0,1,4,2,8,6,7,8];

// console.log(quickSort(arr));


function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[Math.floor(arr.length/2)];
    let left = [];
    let right = [];
    let middle = [];
    for(let element of arr){
        if( element < pivot){
            left.push(element);
        }else if(element == pivot){
            middle.push(element);
        }else{
            right.push(element);
        }
    }
    return quickSort(left).concat(middle).concat(quickSort(right));
}

function main(){
    let arr = [3,0,1,4,2,8,6,7]
    console.log(quickSort(arr));
    let sortedArr = quickSort(arr);
    console.log("array ordenao" + sortedArr);
}
main();  // chamada da função main() para executar o programa.  // chamada
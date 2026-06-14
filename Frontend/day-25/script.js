// import promptSync from "prompt-sync";

// const prompt = promptSync();
//                                            //REVSION  PATTERN PROBLEM 

// // let n = Number(prompt("enter any number"))

// // for(let i=1; i<=n;i++){
// // for (let i=1;i<=n;i++){
// //     process.stdout.write("*")

// // }    console.log()


// // }

// // let n = Number(prompt("enter any number"))

// // for(let i=1; i<=n;i++){
// //                                          
// // for (let j=1;j<=i;j++){
// //     process.stdout.write("*")

// // }    console.log()


// // }


// // let n = Number(prompt("enter any number"))

// // for(let i=1; i<=n;i++){
                                           
// // for (let j=1;j<=n-i+1;j++){
// //     process.stdout.write(" ")

// // }    console.log()


// // }



// let n = Number(prompt("enter any number"))

// for(let i=1; i<=n;i++){
                                           
// for (let j=0;j<n-i;j++){
//     process.stdout.write(" ")

// }   for (let k=1;k<=i;k++){
//     process.stdout.write("* ")

// }   


//  console.log( )


// }




// let array = [23,45,105,5,6,7,77,886,44,101,22,33,99]
// let max=0;
// let copy=0;
// let current =0;
// for (let i = 0; i <=array.length;i++){
//     current =array[i]
//     if(array[i]>max){
//      copy=max
// max =array[i]
//     }else if( current >copy && current<max){
// copy = current 
//     }
    
// }
// console.log(copy);

// let array = [23,45,105,5,6,7,77,886,44,101,22,33,99]
// let secondarray=[]
// let j = array.length -1
// for (let i = j ;i>=0;i--){
//     secondarray.push(array[i])
// }
// console.log(JSON.stringify(secondarray))

let arr=[1,2,3,4,5]
let sum = 0;
let mean=0;
for (let i =0 ; i <=arr.length-1;i++){
    sum = sum +arr[i]
    
}
    mean = sum/arr.length

 console.log(sum,mean.toFixed(1))

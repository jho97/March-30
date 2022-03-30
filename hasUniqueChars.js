// Write your code below
// function hasUniqueCharcters (str) {
//     return new Set(str).size === str.length;
// }
// console.log(hasUniqueCharcters('abcabc'))


// Why does the object work for this problem?
// function hasUniqueCharcters (str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i]
//         if (obj[ch]) return false;
//         obj[ch] = true
//     }
//     return true;
// }
// console.log(hasUniqueCharcters('abc'))

// This doesn't account for all the characters in the string
// function hasUniqueNumber (str) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i-1]) {
//         return false
//       }
//     }
//     return true
//   }
//   console.log(hasUniqueNumber('Bob'))

//Taken from a classmate
// const hasUniqueChars = (word) => {
//     let unique = true
//     for (i=0; i<word.length; i++) {
//         for (j=i+1; j<word.length; j++){
//             if (word[j] === word[i]) {
//                 unique = false
//             }
//         }
//     }
//     return unique
// }

function hasUniqueCharcters (str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false
        }
    }
    return true
}
console.log(hasUniqueCharcters('onOam'))


//Notes from class on call back functions
// function greeting(name) {
//     return ('Hello' + name);
//   }
  
//   function processUserInput(callback) {
//     let name = "Jonathan";
//     console.log(callback(name));
//   }
  
//   processUserInput(greeting);


//.forEach (element, index, array)
// let numArray = [0,1,2,3,4]

// numArray.forEach(function(num, numIndex) {
//     console.log(`${num} is at index ${numIndex}`)
// })

//.map
// const numArray = [0,1,2,3,4]

// const mappedArr = numArray.map(function(num) {
//     return num += 2
// })

// console.log(mappedArr)

//.filter for this example should filter out numbers that are divisible by 2
// const numArray = [0,1,2,3,4]

// const filteredArr = numArray.filter(function(element) {
    //     return element % 2 ===0
    // })
    
    // console.log(filteredArr)
    
    //.reduce looks at an array and spits back out a single value.    
    //.reduce(previousValue, currentValue)
    // const numArray = [0,1,2,3,4]

    // const reduced = numArray.reduce(function(acc, curr){
    //     return acc + curr
    // })

    // console.log(reduced)
    
    //chaining methods
    // const numArray = [0, 1, 2, 3, 4]

    // const myNum = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)
    
    // console.log(myNum)
// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Example:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.



function taskScheduler(arr, n){
  let hash = {}
  let holder = []

  for(i=0; i < arr.length; i++){
    if(hash[arr[i]]){
      hash[arr[i]] = hash[arr[i]] + 1
    } else {
      hash[arr[i]] = 1
    }
  }

  let current = ''

  for(i = 0; i < arr.length + n; i++){
    let innerCurr = hash[arr[i]].key

    if(current === innerCurr){
      holder.push(idle)
      current = innerCurr
    }

    holder.push(hash[arr[i]])
    current = hash[arr[i]]
    hash[arr[i]] - 1
  }

  return holder.length

}



// //////////////////////////////////
// ques #2

// write a function that takes two arrays. Return true if every element in the array has a corresponding element squared in the second array

// example:
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false [must be same frequency]

// gameplan
// make a table that consists of how many times number comes around each time for first element

// do the same for second element

// see if key from first table is key^2 from second table

// also check if the amount in squared value table is the same as first table 

// return true

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }

  let arr1Hash = {}
  let arr2Hash = {}

  for(let val of arr1){
    if(arr1Hash[val]){
      arr1Hash[val] = arr1Hash[val] + 1
    } else{
      arr1Hash[val] = 1
    }
  }

  for(let val of arr2){
    if(arr2Hash[val]){
      arr2Hash[val] = arr2Hash[val] + 1
    } else{
      arr2Hash[val] = 1
    }
  }

  console.log(arr1Hash, arr2Hash)

  for(let key in arr1Hash){
    if(!(key ** 2 in arr2Hash)){
      return false
    }
    if(arr1Hash[key] !== arr2Hash[key ** 2]){
      return false
    }
  }

  return true

}

same([1,2,2,3], [4,4,1,9])






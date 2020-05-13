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





function findRotationCount(arr){
    if(arr[0] < arr[arr.length-1]) return 0
    while(arr[0] > arr[arr.length-1]){
        console.log(arr)
        if((arr[Math.floor(arr.length/2)] < arr[Math.floor(arr.length/2)+1]) && (arr[Math.floor(arr.length/2)] > arr[Math.floor(arr.length/2)-1])){
            
            arr.pop()
        } else {
            arr.splice(Math.floor(arr.length/2))
        }
    }
    return arr.length
}

module.exports = findRotationCount

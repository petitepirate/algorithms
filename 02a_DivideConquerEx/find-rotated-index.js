function findRotatedIndex(arr,tar){
    if(arr[arr.length-1] !== tar){
        while(arr[arr.length-1] !== tar && arr.length !== 1){
            if(arr[Math.round(arr.length/2)] > tar){
                arr.splice(Math.round(arr.length/2))
            } else if (arr[Math.round(arr.length/2)] < tar){
                arr.pop()
            } else {
                arr.splice(Math.round(arr.length/2))
            }
        }
    }

    if(arr.length === 1 && arr[0] !== tar){
        console.log(-1)
        return -1
    } else {
        console.log(arr.length-1)
        return arr.length-1
    }
}

module.exports = findRotatedIndex

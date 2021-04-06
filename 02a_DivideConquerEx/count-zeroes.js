function countZeroes(arr) {
  if(arr[0] === 0) return arr.length
  if(arr[arr.length-1] === 1) return 0

  while(arr[0] !== 0 && arr[arr.length-1] !== 1 && arr.length !== 0){
      if(arr[Math.floor(arr.length/2)] === 1 && arr[Math.floor(arr.length/2)+1] === 0){
          arr.splice(0,Math.floor(arr.length/2)+1)
      } else if(arr[Math.floor(arr.length/2)] === 0 && arr[Math.floor(arr.length/2)-1] === 1){
          arr.splice(0,Math.floor(arr.length/2))
      } else if(arr[Math.floor(arr.length/2)] === 1 && arr[Math.floor(arr.length/2)+1] === 1){
          arr.splice(0,Math.floor(arr.length/2)+2)
      } else {
          arr.shift()
      }
  }

  return arr.length 
}

module.exports = countZeroes

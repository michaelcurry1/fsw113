const myArrays = [4,5,6,7,8]
const newArray = object.assign({}, myArrays,{count: myArrays.length})
//const newArray = myArrays.map(item=>item * 2);
console.log(myArrays)
console.log(newArray)

const myArrays = [4,5,6,7,8]
const newArray ={...myArrays,count: myArrays.length}
console.log(myArrays)
console.log(newArray)

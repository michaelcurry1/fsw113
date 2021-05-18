var printData = function(data){
    return function () {
    var sentence = data.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
  }
}

const print = printData
const output = print("hi there,How ARE YOU")
const result = output()
console.log(result)
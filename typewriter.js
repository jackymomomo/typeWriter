const sentence = "BatMan is by far the coolest super hero!"


// loop through string
//print each letter at a certain time 

const eachLetter = function(string){
  for(let i = 0; i < string.length; i++){
    setTimeout(() => {
      console.log(string[i])
    }, i * 50)
  }
}

eachLetter(sentence)
var fizz = 3
var buzz = 5
for (i=0;i<=50;i++){
  if(i%fizz === 0 && i%buzz === 0){
    console.log("fizzbuzz")
  } else if (i%fizz === 0) {
    console.log("fizz")
  } else if (i%buzz === 0){
     console.log("buzz")
  }else{
  console.log(i)
  }
}
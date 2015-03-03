var num = 1000;
var multiples = 0;
var sum = 0;
while(multiples<999){
  for(var x = 1; x < 1000; x++){
    if(multiples % 3 === 0 || multiples % 5 === 0){
    multiples += 3;
    multiples += 5;
    sum += multiples;
    console.log(multiples);
    }
  }
}
console.log(sum);
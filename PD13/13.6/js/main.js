let input = window.prompt("write a 2-digit number.");

function maxDigit(n){
  if(n == 0){return 0;}
  else{
    var remainder = n % 10
    return Math.max(remainder, maxDigit((n-remainder)*1e-1));
  }
}

console.log(`Biggest digit is ${maxDigit(input)}`);
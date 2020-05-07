/*
Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) 
round that number up to an elegant value and 3) return it.

What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to 
whole numbers. Numbers 10 and above should be rounded like this:

10-99.99... ---> Round to number divisible by 5

100-999.99... ---> Round to number divisible by 50

1000-9999.99... ---> Round to number divisible by 500

And so on...

Good luck!
*/

const gracefulTipping = (bill) => {
  let tip = bill * .15;
  let total = Math.ceil(bill + tip);
  if(total < 10) {
    return Math.ceil(total);
  } else {
    let divisorStr = '5';
    let divisor = 0;
    let totalStr = total.toString();
    if(total >= 100) {
      for(let i = 1; i < totalStr.length; i++) {
        if(totalStr[i] !== '.') {
          divisorStr += '0';
        }
        if(totalStr[i] === '.') {
          break;
        }
      } 
    }
    divisor += Number(divisorStr);
    console.log('here is divisor: ' + divisor);
    while(total % divisor !== 0) {
      total += 1;
    }
    return total;
  }
}
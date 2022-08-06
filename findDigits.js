function findDigits(n) {
    // Write your code here
    let nofDivisors=0;
    let digits = n.toString().split('');
    for (let digit = 0; digit<digits.length; digit++){
        if (n%parseInt(digits[digit]) == 0){
            nofDivisors++
        }
    }
    
    return nofDivisors;
}
 console.log(findDigits(12));
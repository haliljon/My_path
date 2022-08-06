function beautifulDays(i, j, k) {
    // Write your code here
    let givenNumbers = [];
    for ( let num = i; num<=j; num++){
        givenNumbers.push(num);
    }
    let resultCount = 0;

    for (const givenNumber in givenNumbers){
        const reversedNumber = givenNumbers[givenNumber].toString().split('').reverse().join('')
        let testResult = Math.abs(givenNumbers[givenNumber]-parseInt(reversedNumber))/k;
        if (testResult % 1 == 0){
            resultCount++;
        } 
    }
    return (resultCount);
}

// loop ishlamayapti shekilli

console.log(beautifulDays(20, 23, 6))
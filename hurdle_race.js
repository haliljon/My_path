function hurdleRace(k, height) {
    // Write your code here
    let maxCount = 0;
    const maxHurdle = Math.max(...height);
    if (k<maxHurdle){
        maxCount = maxHurdle - k;
    }
    return maxCount;
}

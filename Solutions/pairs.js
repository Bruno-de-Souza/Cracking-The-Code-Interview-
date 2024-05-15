function pairs() {
    let n = ['1', '2', '3', '4'];
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            console.log(n[i] + ',' + n[j]);
        }
    }
    console.log('\n=======================================================\n')
}
console.log(pairs());

//What is the time complexity of this function and Why?
//The time complexity of this function is O(n^2) because the function loops through the array twice.
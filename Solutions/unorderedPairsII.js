function unorderedPairsII() {
    let arrayA = ['1', '2', '3', '4'];
    let arrayB = ['A', 'B', 'C', 'D'];

    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayA[i] < arrayB[j]) {
                console.log('ArrayA: ' + arrayA[i] + ',' + 'ArrayB: ' + arrayB[j]);
            }
        }
    }
}
unorderedPairsII();

//What is the time complexity of this function and Why?
//The time complexity of this function is O(n^2) because the function loops through the array twice.
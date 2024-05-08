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
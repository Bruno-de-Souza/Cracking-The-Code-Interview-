function unorderedPairs() {
    var unPairs = ['1', '2', '3', '4'];
    for (var i = 0; i < unPairs.length; i++) {
        for (var j = i + 1; j < unPairs.length; j++) {
            console.log(unPairs[i] + ',' + unPairs[j]);
        }
    }
    console.log('\n=======================================================\n')
}
unorderedPairs();
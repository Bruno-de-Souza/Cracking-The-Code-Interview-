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

//What is the time complexity of this function and Why?
//The time complexity of this function is O(n^2) because the function loops through the array twice.
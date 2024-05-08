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
function foo() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    let product = 1;

    console.log('\nThis the sum of array: \n');

    for (let i = 0; i <array.length; i++) {
        sum += array[i];
        console.log(sum);
    }

    console.log('\nThis is the product of the array: \n');
    
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
        console.log(product);
    }
    
    console.log('\n=======================================================\n')
    console.log('The Sum is: ' + sum + ' ' + 'and the Product is: ' + product);
}

foo();


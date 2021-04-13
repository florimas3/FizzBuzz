function fizzbuzz(num) {
    if (num % 5 === 0)
        return 'Buzz';
    if (num % 3 === 0)
        return 'Fizz';
    if (num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz';
    return num;
}
for (var i = 1; i <= 100; i++)
    console.log(fizzbuzz(i));

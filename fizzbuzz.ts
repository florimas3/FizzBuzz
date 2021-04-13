function fizzbuzz(num: number): string | number {
    if (num % 5 === 0) return 'Buzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';

    return num;
}

for (let i: number = 1; i <= 100; i++) console.log(fizzbuzz(i));
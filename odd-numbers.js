function getOddNumbersFromArry(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const number = numbers[index];
    if (number % 2 !== 0) {
      //   console.log(index, number);
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

function sumOfOddNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const number = numbers[index];
    sum = sum + number;
  }
  return sum;
}

const myNumbers = [23, 34, 53, 54, 67, 354, 89, 33, 22, 123, 232, 567, 43];
const oddNumbers = getOddNumbersFromArry(myNumbers);
const oddSum = sumOfOddNumbers(oddNumbers);
console.log("this is odd number summation:", oddSum);

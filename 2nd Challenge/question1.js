function findThreeLargestNumbers(array) {
    // checking if the elements are 3 or more
    if (array.length < 3) {
      console.log("Please Enter at least 3 numbers");
      return;
    }

    let first = -Infinity,
      second = -Infinity,
      third = -Infinity;

    //looping
    for (const currentNumber of array) {
      //if the current number is greater than first
      if (currentNumber > first) {
        third = second;
        second = first;
        first = currentNumber;
      }

      //if current number is between first
      //UPDATE second
      else if (currentNumber > second) {
        third = second;
        second = currentNumber;
      } else if (currentNumber > third) {
        third = currentNumber;
      }
    }

    let output = [];
    output.push(first, second, third);
    return output;
  }

  console.log(
    findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
  );
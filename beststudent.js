function bestStudent() {
  let maxSum = 0;
  let average = 0;
  let nameStudent;

  result.forEach(element => {
    let sum = 0;
    element.rating.forEach((elementRating, index, arr) => {
      sum += elementRating;
      average = sum / arr.length;
      if (maxSum < average) {
        maxSum = average;
        nameStudent = element.name;
      }
    })
  })

  console.log(`Кращий студент ${nameStudent} з середнім балом ${maxSum}`);
}
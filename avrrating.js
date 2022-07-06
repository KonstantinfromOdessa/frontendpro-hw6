function avrRating() {
    let maxSum = 0;
    let average = 0;
    let nameStudent;

    result.forEach(element => {
        let sum = 0;
        element.rating.forEach((elementRating, index, arr) => {
            sum += elementRating;
            average = sum / arr.length;
        })

        for (let value of Object.entries(element)) {
            element.avr = average;
        }
    })
    return result;
}
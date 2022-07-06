function debtList(arr) {
    let debtArr = [];
    arr.forEach((element, index, arr) => {
        if (element.avr < 5) {
            debtArr.push(element);
        }
    })
    console.log(debtArr);
    return debtArr;
}
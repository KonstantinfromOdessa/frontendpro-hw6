function setStudents () {
  let confirmCustomRait; 
  let customRaring; 
  let ratingArr;
  let i = 0;

  if (isNaN(amount) || amount > 10) {
    console.log('Не вірне значення (кількість студентів має бути від 1 до 10)');
    return;
  } else {
    while (i < amount) { 
    let obj = {};
    obj.name = prompt('Введіть імʼя студента:');
    confirmCustomRait = confirm('Ввести оцінки в ручну?');
    if (confirmCustomRait) {
      customRaring = prompt('Введіть оцінки студента через кому.');
      ratingArr = customRaring.split(',').map(element => +element);
      obj.rating = ratingArr;
    } else {
      obj.rating = setRaiting();
    }
    
    result.push(obj);
    i++;
  }
            
  console.log('Початковий список студентів');
  console.log(result);
  getOperation ();
  return result;
  }
};
  
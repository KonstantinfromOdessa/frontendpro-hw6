function gradeList(arr) {
  console.log('Список успішності');
  console.log(arr.sort((a, b) => a.avr < b.avr ? 1 : -1));
  return arr.sort((a, b) => a.avr < b.avr ? 1 : -1);
}
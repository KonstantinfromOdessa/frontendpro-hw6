let amount = +prompt('Введіть кількість студентів.');
let result = [];

setStudents();

function getOperation () {
    let operation;
    do {
        operation = +prompt(`Виповніть необхідну операцію:
        1. Найкращий студент
        2. Список успішності
        3. Середня оцінка
        4. Список боржників                     
        5. Додати нового студента                     
        6. Додати нового рандомного студента
        7. Повтор операції`);
    } while (operation < 1 || operation > 7);

    if (operation == 1) {
        bestStudent();
    } else if (operation == 2) {
        gradeList(avrRating());
    } else if (operation == 3) {
        avrRating();
        console.log('Середня оцінка');
        console.log(result);
    } else if (operation == 4) {
        console.log('Список боржників');
        debtList(avrRating());
    } else if (operation == 5) {
        amount = 1;
        setStudents();
    } else if (operation == 6) {
        let randomStudent = studentsMock.getStudent();
        randomStudent.rating = randomStudent.marks;
        result.push(randomStudent);
        avrRating();
        console.log(result);
        getOperation ();
    } else if (operation == 7) {
        amount = +prompt('Введіть кількість студентів.');
        result = [];
        setStudents();
    } else {
        console.log('Не вірна операція!');
    }
}
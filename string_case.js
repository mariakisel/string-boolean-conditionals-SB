const userName = 'maRIa';
const userSurname = 'Kiseleva';

let resultName = userName[0].toUpperCase() + userName.substr(1).toLowerCase();
let resultSurname = userSurname[0].toUpperCase() + userSurname.substr(1).toLowerCase();

console.log(userName === resultName ? 'Имя осталось без изменений.' : 'Имя было преобразовано.');
console.log(userSurname === resultSurname ? 'Фамилия осталась без изменений.' : 'Фамилия была преобразована.');

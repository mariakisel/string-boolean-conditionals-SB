const password = '-9999';
if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надёжный.');
}
else {
    console.log('Пароль недостаточно надёжный.');
}


/*
const password = '1234-';
let isStrongPassword = password.length >= 4 && (password.includes('_') || password.includes('-'));
console.log(isStrongPassword ? 'Пароль надёжный.' : 'Пароль недостаточно надёжный.');
*/
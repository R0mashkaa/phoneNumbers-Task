// // #task
// // В нас є 3 країни.
// // США, Канада, Австралія.
// // До нас приходять номера в різних форматах.
// // Нам треба визначити що це за країна і привести всі телефони до одного формату.
// // Сторонні ліби використовувати ЗАБОРОНЕНО.
// // Ніякого лодаша, чи шось повязаного з телефонами. Тільки чистий ЖС
const CANADIAN_CODES = [
  "204", "226", "236", "249", "250", "289", "306", "343", "365", "403",
  "416", "418", "431", "437", "438", "450", "506", "514", "519", "548",
  "579", "581", "587", "604", "613", "639", "647", "672", "705", "709",
  "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"
];

const AUSTRALIAN_CODES = [
  "2", "3", "4", "7", "8"
];

function numberFormatter(phone) {

  if (phone === undefined || phone === null || phone === '') {
    return '';
  }

  phone = phone.replace(/[^\d]/g, '');

  if (phone.charAt(0) === '1') {
    phone = phone.replace('11', '1');
  }
  else if (phone.charAt(0) === '0') {
    phone = phone.replace('0', '61');
  }
  else if (AUSTRALIAN_CODES.includes(phone.charAt(0))) {
    phone = phone = '61' + phone;
  }

  return phone

}

function getPhoneInfo(phone) {
  normalizedNumber = numberFormatter(phone);

  if (normalizedNumber === '' || normalizedNumber.length >= 12 ) { 
    return '';
  }
  else if (CANADIAN_CODES.includes(normalizedNumber.substring(1, 4))) {
    return { normalizedPhone: '+' + normalizedNumber, country: 'CANADA' }
  }
  else if (AUSTRALIAN_CODES.includes(normalizedNumber.charAt(2))) {
     return { normalizedPhone: '+' + normalizedNumber, country: 'AUSTRALIA' }
  }
  else {
    return { normalizedPhone: '+' + normalizedNumber, country: 'USA' }
  }
  
}

console.log(getPhoneInfo('14033058101'));
    


export function getCountDigitInString(str) { // в подобных хэлперах стоит делать проверку входящих данных
  const notDigitString = str.replace(/\d/g, '')
  return str.length - notDigitString.length
}

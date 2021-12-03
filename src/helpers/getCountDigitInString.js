export function getCountDigitInString(str) { // в подобных хэлперах стоит делать проверку входящих данных
  if (typeof str === 'string') {
    const notDigitString = str.replace(/\d/g, '')
    return str.length - notDigitString.length
  }
  return 0
}

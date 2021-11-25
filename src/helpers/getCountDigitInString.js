export function getCountDigitInString(str) {
  const notDigitString = str.replace(/\d/g, '')
  return str.length - notDigitString.length
}
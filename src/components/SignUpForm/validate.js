import {getCountDigitInString} from "../../helpers";

const regexpForName = /^[a-z_-]{3,16}$/
const regexpForEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
const regexpTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

export function validation({name, email, tel, language, isConfirmConditions}) {
  const errors = {}

  if (!name.length) {
    errors.name = 'Заполните поле'
  } else if (!regexpForName.test(name)) {
    errors.name = 'Введено не корректное значение'
  }

  if (!email.length) {
    errors.email = 'Заполните поле'
  } else if (!regexpForEmail.test(email)) {
    errors.email = 'Введено не корректное значение'
  }

  if (!tel.length) {
    errors.tel = 'Заполните поле'
  } else if (!regexpTel.test(tel) ?? getCountDigitInString(tel) > 11) {
    errors.tel = 'Введено не корректное значение'
  }


  if (!['russian', 'english', 'china', 'spain'].includes(language)) {
    errors.language = 'Выберите язык'
  }

  if (isConfirmConditions !== true) {
    errors.isConfirmConditions = 'Необходимо согласиться с условиями'
  }

  return errors
}
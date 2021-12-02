import {useCallback, useState} from "react";

export function useToggle(defaultValue = false) {
  // В инициализации useState не должна хранится функция. Тем более с вложенными тернарниками
  const [value, setValue] = useState(() => {
    return typeof defaultValue === 'function' ?
      defaultValue() :
      typeof defaultValue === 'boolean' ?
        defaultValue :
        false
  })

  const toggle = useCallback((updateValue) /* на этой строке параметр в скобках, на следующей без. Code-style? */ => {
    setValue(value => typeof updateValue === 'boolean' ? updateValue : !value)
  }, [])

  return [value, toggle]
}

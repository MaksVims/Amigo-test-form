import {useCallback, useState} from "react";

export function useToggle(defaultValue = false) {
  const [value, setValue] = useState(() => {
    return typeof defaultValue === 'function' ?
      defaultValue() :
      typeof defaultValue === 'boolean' ?
        defaultValue :
        false
  })

  const toggle = useCallback((updateValue) => {
    setValue(value => typeof updateValue === 'boolean' ? updateValue : !value)
  }, [])

  return [value, toggle]
}
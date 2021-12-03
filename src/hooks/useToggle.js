import {useCallback, useState} from "react";

function getInitialState(value) {
  return typeof value === 'function' ?
    value() :
    typeof value === 'boolean' ?
      value : false
}

export function useToggle(defaultValue = false) {
  const [value, setValue] = useState(() => getInitialState(defaultValue))

  const toggle = useCallback(updateValue => {
    setValue(value => typeof updateValue === 'boolean' ? updateValue : !value)
  }, [])

  return [value, toggle]
}

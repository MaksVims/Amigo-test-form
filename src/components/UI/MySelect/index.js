import React, {useEffect} from 'react';
import {useField} from "formik";
import {Option, Select, SelectDropdown, SelectOptions} from "./styles";
import {ErrorMessage, FormControl, FormInput, Label} from "../../styled-common";
import {useToggle} from "../../../hooks";


const MySelect = ({options, label, ...props}) => {
  const [field, meta, {setValue}] = useField(props)
  const [dropDownOpen, toggleDropDown] = useToggle()

  const currentOption = options?.find(option => option.value === field.value)
  const renderedOptions = options?.filter(option => option.value && option.value !== field.value)

  const clickOptionHandler = (e, value) => {
    setValue(value)
    toggleDropDown(false)
  }

  const clickSelectHandler = (e) => {
    e.stopPropagation()
    toggleDropDown()
  }

  useEffect(() => {
    const showDropDown = () => toggleDropDown(false)
    document.body.addEventListener('click', showDropDown)
    return () => {
      document.body.removeEventListener('click', showDropDown)
    }
  }, [])

  return (
    <FormControl>
      <Label>{label}</Label>
      <FormInput
        {...props}
        type="button"
        as={Select}
        data-value={currentOption?.value}
        onClick={clickSelectHandler}
        focus={dropDownOpen}
        aria-label={currentOption.title}
      >
        {currentOption.title}
      </FormInput>
      {meta.error && meta.touched ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
      <SelectDropdown onClick={e => e.stopPropagation()} open={dropDownOpen}>
        <SelectOptions>
          {renderedOptions.map((option) => (
            <Option
              key={option.value}
              onClick={(e) => clickOptionHandler(e, option.value)}
              aria-label={option.title}
            >{option.title}</Option>
          ))}
        </SelectOptions>
      </SelectDropdown>
    </FormControl>
  );
};

export default MySelect;

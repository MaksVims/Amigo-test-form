import React, {useEffect} from 'react';
import {ErrorMessage, FormControl, FormInput, Label} from "../styled-common";
import styled from "styled-components";
import {useField} from "formik";
import {useToggle} from "../../hooks/useToggle";


const Select = styled.button`
  text-align: left;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    right: 11px;
    top: 45%;
    transform: rotate(45deg) translateX(-50%);
    border: 2px solid ${({theme}) => theme.color.primary};
    cursor: pointer;
    z-index: 10;
    border-width: 0 2px 2px 0;
  }
`

const SelectDropdown = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  box-shadow: 04px 8px rgba(44, 39, 56, 0.04), 0 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  width: 100%;
  padding: 12px 0;
  border: 1px solid ${({theme}) => theme.color.border.input};
  position: absolute;
  top: calc(100% + 4px);
  background-color: #fff;
  z-index: ${({theme}) => theme.zIndex.dropdown};
`

const SelectOptions = styled.ul``

const Option = styled.li`
  color: ${({theme}) => theme.color.text.label};
  padding: 12px 15px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${({theme}) => theme.color.bg.light};
    transition: background-color .2s;
  }
`


const MySelect = ({options, label, ...props}) => {
  const [field, meta, {setValue}] = useField(props)
  const [dropDownOpen, toggleDropDown] = useToggle()

  const currentOption = options?.find(option => option.value === field.value)
  const renderedOptions = options.filter(option => option.value && option.value !== field.value)

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
        type="button"
        as={Select}
        data-value={currentOption?.value}
        onClick={clickSelectHandler}
      >
        {currentOption.title}
      </FormInput>
      {meta.error && meta.touched ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
      <SelectDropdown onClick={e => e.stopPropagation()} open={dropDownOpen}>
        <SelectOptions>
          {renderedOptions.map(option => (
            <Option
              key={option.value}
              data-value={option.value}
              onClick={(e) => clickOptionHandler(e, option.value)}
            >{option.title}</Option>
          ))}
        </SelectOptions>
      </SelectDropdown>
    </FormControl>
  );
};

export default MySelect;
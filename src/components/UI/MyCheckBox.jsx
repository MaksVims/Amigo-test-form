import React from 'react';
import {ErrorMessage, FormControl, Label} from "../styled-common";
import {useField} from "formik";
import styled from "styled-components";

const CheckBox = styled.input`
  display: none;
  opacity: 0;

  &:checked + span {
    border: 2px solid ${({theme}) => theme.color.primary};
  }

  &:checked + span:after {
    content: '';
    width: 5px;
    height: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotate(45deg) translate(-110%, -25%);
    border: 2px solid ${({theme}) => theme.color.primary};
    border-width: 0 2px 2px 0;
  }
`

const Rectangle = styled.span`
  position: relative;
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.color.border.input};
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
`

const CheckBoxLabel = styled(Label)`
  display: flex;
  align-items: center;
`

const MyCheckBox = ({children, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <FormControl>
      <CheckBoxLabel>
        <CheckBox type="checkbox" {...props} {...field}/>
        <Rectangle/>
        {children}
      </CheckBoxLabel>
      {meta.error && meta.touched ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default MyCheckBox;
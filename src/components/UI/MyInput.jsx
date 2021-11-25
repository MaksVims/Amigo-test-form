import React from 'react';
import {useField} from "formik";
import {ErrorMessage, FormControl, FormInput, Label} from "../styled-common";


const MyInput = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <FormControl>
      <Label htmlFor={props.name || props.id}>{label}</Label>
      <FormInput id={props.name || props.id} type="text" {...field} {...props}/>
      {meta.error && meta.touched ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default MyInput;
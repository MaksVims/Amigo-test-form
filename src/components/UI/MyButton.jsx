import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  padding: 17px;
  font-size: 16px;
  background-color: ${props => props.primary && props.theme.color.primary};
  color: ${props => props.primary && props.theme.color.text.light};
  background-color: ${props => props.disabled && props.theme.color.bg.disabled};
  color: ${props => props.disabled && props.theme.color.text.grey};
  box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
  transition: box-shadow .3s;

  &:hover:not(:disabled) {
    transition: box-shadow .3s;
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08), 0 24px 48px rgba(44, 39, 56, 0.16);
  }
`


const MyButton = ({children, ...props}) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

export default MyButton;
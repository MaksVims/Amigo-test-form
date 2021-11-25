import styled from "styled-components";

export const FormControl = styled.div`
  margin-bottom: 34px;
  position: relative;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  font-weight: 500;
  color: ${({theme}) => theme.color.text.label};
`

export const FormInput = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 6px;
  outline: 1px solid transparent;
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
  border: ${props => props.focus ?
          `2px solid ${props.theme.color.primary}` :
          `1px solid ${props.theme.color.border.input}`
  };
  padding: ${props => props.focus ? `15px 15px 14px 15px` : '16px 16px 15px 16px'};

  &::placeholder {
    color: ${({theme}) => theme.color.text.placeholder};
    font-size: 16px;
  }

  &:focus {
    border: 2px solid ${({theme}) => theme.color.primary};
    padding: 15px 15px 14px 15px;
  }
`

export const ErrorMessage = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  left: 0;
  bottom: -8px;
  transform: translateY(100%);
  color: ${({theme}) => theme.color.text.error};
`

export const Text = styled.span``

export const Link = styled.a`
  color: ${({theme}) => theme.color.primary};
  margin-left: 6px;
  margin-right: 6px;
  cursor: pointer;
`


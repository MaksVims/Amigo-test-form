import styled from "styled-components";

export const Select = styled.button`
  text-align: left;
  position: relative;
  cursor: pointer;
  padding-right: 40px;
  

  
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

export const SelectDropdown = styled.div`
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

export const SelectOptions = styled.ul``

export const Option = styled.li`
  color: ${({theme}) => theme.color.text.label};
  padding: 12px 15px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${({theme}) => theme.color.bg.light};
    transition: background-color .2s;
  }
`
import styled from "styled-components";
import {Text} from "../styled-common";

export const Title = styled.h1`
  font-size: 34px;
  line-height: 44px;
  font-weight: 700;
  margin-bottom: 8px;
`
export const HaveAccount = styled.div`
  margin-bottom: 58px;`


export const FormContainer = styled.section`
  min-width: 320px;
  max-width: 1024px;
  box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02), 0 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 40px 30px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 30px 15px;
  }
`


export const ConfirmText = styled(Text)`
  @media (max-width: 500px) {
    font-size: 15px;
  }
`
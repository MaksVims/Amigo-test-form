import React from 'react';
import {Form, Formik} from "formik";
import {ConfirmText, FormContainer, HaveAccount, Title} from "./styles";
import {Link, Text} from "../styled-common";
import {OPTIONS_LANG_SELECT} from "./const";
import {MyButton, MyCheckBox, MyInput, MySelect} from "../UI";
import {validation} from "./validate";

const SignUpForm = () => {

  return (
    <FormContainer>
      <Title>Регистрация</Title>
      <HaveAccount>
        <Text>Уже есть аккаунт?</Text>
        <Link href='#' aria-label="Войти">Войти</Link>
      </HaveAccount>
      <Formik
        initialValues={{
          name: '',
          email: '',
          tel: '',
          language: '',
          isConfirmConditions: false
        }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
        validate={validation}
      >
        {({isValid, dirty, isSubmitting}) => (
          <Form aria-label="Форма регистрации">
            <MyInput name="name" label="Имя" placeholder="Введите Ваше имя" autofocus/>
            <MyInput type="email" name="email" label="Email" placeholder="Введите ваш email"/>
            <MyInput type="tel" name="tel" label="Номер телефона" placeholder="Введите номер телефона"/>
            <MySelect name='language' options={OPTIONS_LANG_SELECT} label="Язык"/>
            <MyCheckBox name="isConfirmConditions" aria-label='Принять условия'>
              <ConfirmText>
                Принимаю
                <Link href='#' aria-label="условия использования">условия</Link>
                использования
              </ConfirmText>
            </MyCheckBox>
            <MyButton
              disabled={!isValid || isSubmitting || !dirty}
              type="submit"
              primary
              aria-label="Зарегистрироваться"
            >Зарегистрироваться</MyButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SignUpForm;
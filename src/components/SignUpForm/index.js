import React from 'react';
import {Form, Formik} from "formik";
import {FormContainer, HaveAccount, Title} from "./styles";
import MyInput from "../UI/MyInput";
import MyCheckBox from "../UI/MyCheckBox";
import {Link, Text} from "../styled-common";
import MyButton from "../UI/MyButton";
import MySelect from "../UI/MySelect";
import {OPTIONS_LANG_SELECT} from "./const";
import {validation} from "./validation";

const SignUpForm = () => {

  return (
    <FormContainer>
      <Title>Регистрация</Title>
      <HaveAccount>
        <Text>Уже есть аккаунт?</Text>
        <Link href='#'>Войти</Link>
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
        {({isValid, dirty, isSubmitting, ...props}) => (
          <Form>
            <MyInput name="name" label={"Имя"} placeholder="Введите Ваше имя"/>
            <MyInput type="email" name="email" label="Email" placeholder="Введите ваш email"/>
            <MyInput type="tel" name="tel" label="Номер телефона" placeholder="Введите номер телефона"/>
            <MySelect name='language' options={OPTIONS_LANG_SELECT} label="Язык"/>
            <MyCheckBox name="isConfirmConditions">
              <Text>
                Принимаю
                <Link href='#'>условия</Link>
                использования
              </Text>
            </MyCheckBox>
            <MyButton disabled={!isValid || isSubmitting || !dirty} type="submit" primary>Зарегистрироваться</MyButton>
          </Form>
        )}

      </Formik>
    </FormContainer>

  );
};

export default SignUpForm;
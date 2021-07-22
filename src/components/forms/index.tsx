import * as React from 'react';
import { createEvent, createStore } from 'effector';
import styled from 'styled-components';
import { reflect } from '@effector/reflect';
import { Input,  Checkbox, Button, Field, Heading, Box, BoxVertical } from 'woly';
import { block } from '../../lib';

import {
    $formData,
    actualAdressField,
    baseField,
    dateOfBirthField,
    emailFieldWithValidator,
    firstNameField,
    innDataField,
    lastNameField,
    passportCodeAuthorityField,
    passportIdField,
    passportIssuingAuthorityField,
    passportIssuingDateField,
    persDataCheckAgreementCheckbox,
    placeOfBirthField,
    registrationAdressField,
    snilsDataField,
    telephoneField
} from './model';

export const $error = createStore<string | null>(null);
export const $pending = createStore<boolean>(false);
export const $disabled = createStore(false);
export const formSubmitted = createEvent<React.FormEvent<HTMLFormElement>>();


export const CustomerForm: React.FC = () => (
  <Content>
    <BoxVertical>
      <HeadingBlock>
        <Heading size={1}>Анкета для оформления кредитной карты</Heading>
      </HeadingBlock>
      <Form autoComplete="false">
        <SubHeadingWrapper>
          <Heading size={2}>Общая информация</Heading>
        </SubHeadingWrapper>
        <BlockWrapper>
          <Field label="Имя"> 
            <InputFirstName priority="primary"/>
          </Field>
          <Field label="Фамилия"> 
            <InputLastName priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper>
          <Field label="Телефон"> 
            <InputTelephone priority="primary"/>
          </Field>
          <Field label="Email">
            <InputEmailWithValidator priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper>
          <Field label="Дата рождения"> 
            <InputDateOfBirth priority="primary"/>
          </Field>
          <Field label="Место рождения">
            <InputPlaceOfBirth priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper style={{width: '50%'}}>
          <Field label="Гражданство"> 
            <BaseField priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper>
          <Field label="Адресс регистрации">
            <InputRegistrationAdress priority="primary"/>
          </Field>
          <Field label="Фактический адресс проживания">
            <InputActualAdress priority="primary"/>
          </Field>
        </BlockWrapper>
        <SubHeadingWrapper>
          <Heading size={2}>Документы</Heading>
        </SubHeadingWrapper>
        <BlockWrapper>
          <Field label="Серия и номер паспорта">
            <InputPassportId priority="primary"/>
          </Field>
          <Field label="Орган,выдавший документ">
            <InputPassportIssuingAuthority priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper>
          <Field label="Дата выдачи">
            <InputPassportIssuingDate priority="primary"/>
          </Field>
          <Field label="Код подразделения">
            <InputPassportCodeAuthority priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper>
          <Field label="ИНН">
            <InputInnData priority="primary"/>
          </Field>
          <Field label="СНИЛС">
            <InputSnilsData priority="primary"/>
          </Field>
        </BlockWrapper>
        <BlockWrapper>
          <PersDataCheckAgreementCheckbox priority="primary"/>
        </BlockWrapper>
        <BlockWrapper>
          <Submit data-full-width priority="primary"/>
        </BlockWrapper>
      </Form>
    </BoxVertical>
    <Result />
  </Content>
)

const Content = styled.div`
  display: flex;
  max-width: 900px;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
`;

const BlockWrapper = styled(block.L)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SubHeadingWrapper = styled(Box)`
  margin-bottom: 18px;
`;

const HeadingBlock = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-bottom: 46px;
`;

const BaseField = reflect({
    view: Input,
    bind: {
        name: 'baseField',
        type: 'text',
        value: baseField.initialValue.map((value) => value)
    },
});

const InputFirstName = reflect({
    view: Input,
    bind: {
        name: 'firstNameField',
        type: 'text',
        placeholder: 'Мария',
        value: firstNameField.value.map((value: any) => value),
        onChange: firstNameField.handlers.onChange
    },
});

const InputLastName = reflect({
    view: Input,
    bind: {
      name: 'lastNameField',
      type: 'text',
      placeholder: 'Иванова',
      value: lastNameField.value.map((value: any) => value),
      onChange: lastNameField.handlers.onChange
    },
});

const InputEmailWithValidator = reflect({
  view: Input,
  bind: {
      name: 'emailFieldWithValidator',
      type: 'email',
      placeholder: 'i.ivanov@gmail.com',
      value: emailFieldWithValidator.value.map((value: any) => value),
      onChange: emailFieldWithValidator.handlers.onChange
  },
});

const InputTelephone = reflect({
  view: Input,
  bind: {
      name: 'telephoneField',
      type: 'text',
      placeholder: '+7 (911) 111-11-11',
      value: telephoneField.value.map((value: any) => value),
      onChange: telephoneField.handlers.onChange
  },
});

const InputDateOfBirth = reflect({
  view: Input,
  bind: {
      name: 'dateOfBirthField',
      type: 'text',
      placeholder: '02.02.1988',
      value: dateOfBirthField.value.map((value: any) => value),
      onChange: dateOfBirthField.handlers.onChange
  },
});

const InputPlaceOfBirth = reflect({
  view: Input,
  bind: {
      name: 'placeOfBirthField',
      type: 'text',
      placeholder: 'г. Санкт-Петербург, СССР',
      value: placeOfBirthField.value.map((value: any) => value),
      onChange: placeOfBirthField.handlers.onChange
  },
});

const InputRegistrationAdress = reflect({
    view: Input,
    bind: {
        name: 'registrationAdressField',
        type: 'text',
        placeholder: 'Введите ваш адресс регистрации',
        value: registrationAdressField.value.map((value: any) => value),
        onChange: registrationAdressField.handlers.onChange
    },
});

const InputInnData = reflect({
  view: Input,
  bind: {
      name: 'innDataField',
      type: 'text',
      placeholder: 'г.Санкт-Петербург, ул. Тольяти, д.156, корп. 2, кв.7',
      value: innDataField.value.map((value: any) => value),
      onChange: innDataField.handlers.onChange
  },
});

const InputSnilsData = reflect({
  view: Input,
  bind: {
      name: 'snilsDataField',
      type: 'text',
      placeholder: 'г.Санкт-Петербург, ул. Ленина, д.34, кв.46',
      value: snilsDataField.value.map((value: any) => value),
      onChange: snilsDataField.handlers.onChange
  },
});

const InputPassportId = reflect({
  view: Input,
  bind: {
      name: 'passportIdField',
      type: 'text',
      placeholder: '2211 345687',
      value: passportIdField.value.map((value: any) => value),
      onChange: passportIdField.handlers.onChange
  },
});

const InputPassportIssuingAuthority = reflect({
  view: Input,
  bind: {
      name: 'passportIssuingAuthorityField',
      type: 'text',
      placeholder: 'ФМС по Выборгскому району',
      value: passportIssuingAuthorityField.value.map((value: any) => value),
      onChange: passportIssuingAuthorityField.handlers.onChange
  },
});

const InputPassportCodeAuthority = reflect({
  view: Input,
  bind: {
      name: 'passportCodeAuthorityField',
      type: 'text',
      placeholder: '900-006',
      value: passportCodeAuthorityField.value.map((value: any) => value),
      onChange: passportCodeAuthorityField.handlers.onChange
  },
});

const InputPassportIssuingDate = reflect({
  view: Input,
  bind: {
      name: 'passportIssuingDateField',
      type: 'text',
      placeholder: '04.05.2012',
      value: passportIssuingDateField.value.map((value: any) => value),
      onChange: passportIssuingDateField.handlers.onChange
  },
});

const InputActualAdress = reflect({
  view: Input,
  bind: {
      name: 'actualAdressField',
      type: 'text',
      placeholder: 'Введите ваш адресс проживания',
      value: actualAdressField.value.map((value: any) => value),
      onChange: actualAdressField.handlers.onChange
  },
});

const PersDataCheckAgreementCheckbox = reflect({
    view: Checkbox,
    bind: {
        id: 'persDataCheckAgreementCheckbox',
        text: 'Я соглашаюсь с условиями и даю свое согласие на обработку и использование моих персональных данных, и разрешаю сделать запрос в бюро кредитных историй',
        checked: persDataCheckAgreementCheckbox.value.map((value) => value),
        onChange: persDataCheckAgreementCheckbox.handlers.onChange
    },
});

const Submit = reflect({
    view: Button,
    bind: {
      disabled: $disabled,
      type: 'submit',
      text: 'Отправить'
    },
  });

const Form = reflect({
    view: styled.form``,
    bind: {
      disabled: $disabled,
      onSubmit: formSubmitted,
    },
});

const Result = reflect({
    view: styled.div`
    padding-top: 20px;
    `,
    bind: { children: $formData.map((s) => JSON.stringify(s)) },
});

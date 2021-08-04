import {
    createField,
    createFieldset,
    createInput,
    createCheckbox
} from 'reflect-form';

const emailFieldPattern = /\S+@\S+\.\S+/;

//(?=.*\d)          // should contain at least one digit
//(?=.*[a-z])       // should contain at least one lower case
//(?=.*[A-Z])       // should contain at least one upper case
//[a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters

const passwordFieldPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const baseField = createField({
    name: 'baseField',
    initialValue: 'Российская Федерация',
});

export const firstNameField = createInput({
    name: 'firstNameField',
    initialValue: '',
    isRequired: true
});

export const lastNameField = createInput({
    name: 'lastNameField',
    initialValue: '',
    isRequired: true
});

export const emailFieldWithValidator = createInput({
    name: 'emailFieldWithValidator',
    initialValue: '',
    isRequired: true,
    validators: [
      (value) =>
       emailFieldPattern.test(value as string)
          ? null
          : 'Укажите email',
    ],
});

export const actualAdressField = createInput({
    name: 'actualAdressField',
    initialValue: '',
    isRequired: true,
});

export const registrationAdressField = createInput({
    name: 'registrationAdressField',
    initialValue: '',
    isRequired: true,
});

export const telephoneField = createInput({
    name: 'telephoneField',
    initialValue: '',
    isRequired: true,
});

export const dateOfBirthField = createInput({
    name: 'dateOfBirthField',
    initialValue: '',
    isRequired: true,
});

export const placeOfBirthField = createInput({
    name: 'placeOfBirthField',
    initialValue: '',
    isRequired: true,
});

export const persDataCheckAgreementCheckbox = createCheckbox({
    name: 'boolean checkbox field',
    defaultChecked: true,
    isBoolean: true,
});

export const passportIdField = createInput({
    name: 'passportField',
    initialValue: '2214 991822',
});

export const passportIssuingDateField = createInput({
    name: 'passportDateField',
    initialValue: '14.12.20009',
});

export const passportCodeAuthorityField = createInput({
    name: 'passportField',
    initialValue: '33-091',
});

export const passportIssuingAuthorityField = createInput({
    name: 'passportOrganField',
    initialValue: 'ФМС по Выборгскому району г.Санкт-Петербурга',
});

export const snilsDataField = createInput({
    name: 'snilsField',
    initialValue: '123-456-789 00',
});

export const innDataField = createInput({
    name: 'innField',
    initialValue: '332913736659',
});

const form = createFieldset('baseFieldSet', [
    actualAdressField,
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
    snilsDataField
]);

export const $formData = form.value.map((s) => JSON.stringify(s, null, 2));

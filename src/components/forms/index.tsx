import * as React from 'react';
import styled from 'styled-components';
import { reflect } from '@effector/reflect';

import { Input, TextArea, Select, Checkbox } from "woly";
import { IconInfo } from 'static/icons';

import {
    $result,
    baseField,
    booleanCheckboxField,
    firstNameField,
    citySelect,
    textCheckboxField,
    textDefaultCheckedCheckboxField,
} from './model';


export const CustomerForm: React.FC = () => {
    return (
        <Form autoComplete="false">
            <Input
                type="text"
                name="First name"
                variant="primary"
                onChange={() => console.info('On input change')}
            />
            <Input
                type="text"
                name="Last name"
                placeholder="Enter your last name"
                variant="primary"
                onChange={() => console.info('On input change')}
            />
            <Input
                type="email"
                name="Email"
                placeholder="Enter your email"
                variant="primary"
                onChange={() => console.info('On input change')}
            />
            <BaseField />
        </Form>
    )
}

const Form = styled.form`
  padding: 15px;

  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`

const BaseField = reflect({
    view: Input,
    bind: {
        value: baseField.initialValue.map((value) => value),
        ...baseField.handlers,
    },
});

const InputFieldWithValidator = reflect({
    view: Input,
    bind: {
        placeholder: 'Enter your first name',
        value: firstNameField.value.map((value) => value),
    },
});

const SelectField = reflect({
    view: Select,
    bind: {
        value: citySelect.value.map((v) => v),
        options: citySelect.options,
        ...citySelect.handlers,
    },
});

const TextCheckbox = reflect({
    view: Checkbox,
    bind: {
        label: 'Text checkbox',
        value: textCheckboxField.value.map((v) => v),
        ...textCheckboxField.handlers,
    },
});

const TextDefaultCheckedCheckbox = reflect({
    view: Checkbox,
    bind: {
        label: 'Text checkbox default checked',
        value: textDefaultCheckedCheckboxField.value.map((v) => v),
        checked: textDefaultCheckedCheckboxField.value.map((v) => v.length),
        ...textDefaultCheckedCheckboxField.handlers,
    },
});

const BooleanCheckbox = reflect({
    view: Checkbox,
    bind: {
        label: 'Boolean checkbox',
        value: booleanCheckboxField.value.map((v) => v),
        checked: booleanCheckboxField.value.map((v) => v),
        ...booleanCheckboxField.handlers,
    },
});

const Result = reflect({
    view: styled.pre``,
    bind: { children: $result },
});

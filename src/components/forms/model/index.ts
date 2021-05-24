import {
    createField,
    createFieldset,
    createList,
    createInput,
    createSelect,
    createCheckbox,
} from 'reflect-form';

const selectOptions = [
    {
        value: 'Select option',
        label: 'Select option',
    },
    {
        value: 'Select option selected',
        label: 'Select option selected',
        selected: true,
    },
    {
        value: 'Select option disabled',
        label: 'Select option disabled',
    },
];

export const baseField = createField({
    name: 'baseField',
    initialValue: 'Российская Федерация',
});

export const firstNameField = createInput({
    name: 'inputField',
    initialValue: '',
    isRequired: true,
});

export const citySelect = createSelect({
    name: 'selectField',
    options: selectOptions,
});

export const textCheckboxField = createCheckbox({
    name: 'text default checkbox field',
    initialValue: 'text checkbox field',
});

export const textDefaultCheckedCheckboxField = createCheckbox({
    name: 'text default checked checkbox field',
    initialValue: 'text default checked checkbox field',
    defaultChecked: true,
});

export const booleanCheckboxField = createCheckbox({
    name: 'boolean checkbox field',
    defaultChecked: true,
    isBoolean: true,
});

const listGroup = createList('listGroup', [
    textCheckboxField,
    textDefaultCheckedCheckboxField,
    booleanCheckboxField,
]);

const form = createFieldset('baseFieldSet', [
    firstNameField,
    citySelect,
    textCheckboxField,
    textDefaultCheckedCheckboxField,
    booleanCheckboxField,
    listGroup,
]);

export const $result = form.value.map((s) => JSON.stringify(s, null, 2));

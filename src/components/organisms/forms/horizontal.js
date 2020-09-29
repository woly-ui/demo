import * as React from 'react';
import styled from 'styled-components';

import { button, input, label, surface } from '@components';
import { block } from '@lib/box-styles';

export const HorizontalForm = () => (
  <FormWrapper>
    <surface.Form>
      <FormHeader>
        <strong>Horizontal </strong>
        <small>Form</small>
      </FormHeader>
      <FormBody>
        <InputBlock>
          <label.Primary text="Email" />
          <input.Primary
            type="email"
            name="email"
            placeholder="Enter Email.."
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <InputBlock>
          <label.Primary text="Password" />
          <input.Primary
            type="password"
            name="password"
            placeholder="Enter Password.."
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
      </FormBody>
      <FormFooter>
        <block.S>
          <button.Destructive
            text="Reset"
            onClick={() => console.info('Hi!')}
          />
          <button.Primary text="Submit" onClick={() => console.info('Hi!')} />
        </block.S>
      </FormFooter>
    </surface.Form>
  </FormWrapper>
);

export const FormHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  border-bottom: 1px solid;
  background-color: var(--simple);
  border-color: var(--base-second);
`;

export const FormFooter = styled(FormHeader)`
  border-top: 1px solid;
  border-color: var(--base-second);

  & > div {
    display: flex;
  }
  button {
    margin-right: 6px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const FormBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const InputBlock = styled(block.M)`
  margin-bottom: 1rem;
`;

export const BottomBlock = styled.div`
  display: flex;
  margin: 0 -15px;
  & > div {
    padding: 0 15px;
  }
`;

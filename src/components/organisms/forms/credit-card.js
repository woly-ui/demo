import * as React from 'react';
import styled from 'styled-components';

import { block } from '@lib/box-styles';
import { input, label, surface } from '@components';

export const CreditCardForm = () => (
  <FormWrapper>
    <surface.Form>
      <FormHeader>
        <strong>Credit Card </strong>
        <small>Form</small>
      </FormHeader>
      <FormBody>
        <InputBlock>
          <label.Primary text="Name" />
          <input.Primary
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <InputBlock>
          <label.Primary text="Credit Card Number" />
          <input.Primary
            type="text"
            name="card"
            placeholder="Enter your name"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <BottomBlock>
          <InputBlock>
            <label.Primary text="Month" />
            <input.Primary
              type="text"
              name="month"
              placeholder="1"
              onChange={() => console.info('On input change')}
            />
          </InputBlock>
          <InputBlock>
            <label.Primary text="Year" />
            <input.Primary
              type="text"
              name="year"
              placeholder="2014"
              onChange={() => console.info('On input change')}
            />
          </InputBlock>
          <InputBlock>
            <label.Primary text="CVC" />
            <input.Primary
              type="text"
              name="cvc"
              placeholder="123"
              onChange={() => console.info('On input change')}
            />
          </InputBlock>
        </BottomBlock>
      </FormBody>
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

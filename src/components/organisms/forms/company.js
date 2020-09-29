import * as React from 'react';
import styled from 'styled-components';

import { block } from '@lib/box-styles';
import { input, label, surface } from '@components';

export const CompanyForm = () => (
  <FormWrapper>
    <surface.Form>
      <FormHeader>
        <strong>Company </strong>
        <small>Form</small>
      </FormHeader>
      <FormBody>
        <InputBlock>
          <label.Primary text="Company" />
          <input.Primary
            type="text"
            name="company"
            placeholder="Enter your company name"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <InputBlock>
          <label.Primary text="VAT" />
          <input.Primary
            type="text"
            name="vat"
            placeholder="PL1234567890"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <InputBlock>
          <label.Primary text="Street" />
          <input.Primary
            type="text"
            name="street"
            placeholder="Enter street name"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <BottomBlock>
          <InputBlock>
            <label.Primary text="City" />
            <input.Primary
              type="text"
              name="city"
              placeholder="Enter your city"
              onChange={() => console.info('On input change')}
            />
          </InputBlock>
          <InputBlock>
            <label.Primary text="Postal Code" />
            <input.Primary
              type="text"
              name="pc"
              placeholder="Postal Code"
              onChange={() => console.info('On input change')}
            />
          </InputBlock>
        </BottomBlock>
        <InputBlock>
          <label.Primary text="Country" />
          <input.Primary
            type="text"
            name="country"
            placeholder="Country name"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
      </FormBody>
    </surface.Form>
  </FormWrapper>
);

const FormHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  border-bottom: 1px solid;
  background-color: var(--simple);
  border-color: var(--base-second);
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const FormBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

const InputBlock = styled(block.M)`
  margin-bottom: 1rem;
`;

const BottomBlock = styled.div`
  display: flex;
  margin: 0 -15px;
  & > div {
    padding: 0 15px;
  }
`;

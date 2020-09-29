import * as React from 'react';
import styled from 'styled-components';

import { button, input, surface } from '@components';
import { block } from '@lib/box-styles';
import { SearchIcon } from '@assets/icons';

export const ButtonsGroup = () => (
  <FormWrapper>
    <surface.Form>
      <FormHeader>
        <strong>Buttons </strong>
        <small>Group</small>
      </FormHeader>
      <FormBody>
        <InputBlock>
          <button.LeftSideRounding
            text="Search"
            onClick={(event) => console.info('Hi!')}
            left={<SearchIcon />}
          />
          <input.RightSideRounding
            type="text"
            name="search"
            placeholder="Search"
            onChange={() => console.info('On input change')}
          />
        </InputBlock>
        <InputBlock>
          <input.LeftSideRounding
            type="text"
            name="search"
            placeholder="Search"
            onChange={() => console.info('On input change')}
          />
          <button.RightSideRounding
            text="Search"
            onClick={(event) => console.info('Hi!')}
            left={<SearchIcon />}
          />
        </InputBlock>
      </FormBody>
      <FormFooter>
        <block.XS>
          <button.Destructive
            text="Reset"
            onClick={() => console.info('Hi!')}
          />
          <button.Primary text="Submit" onClick={() => console.info('Hi!')} />
        </block.XS>
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
  display: flex;
`;

export const BottomBlock = styled.div`
  display: flex;
  margin: 0 -15px;
  & > div {
    padding: 0 15px;
  }
`;

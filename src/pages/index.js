import * as React from 'react';
import styled from 'styled-components';

import { Layout, Sidebar } from '@components';
import { Global } from '@lib/box-styles';
import { forms } from '@components';

const Home = () => {
  return (
    <Global>
      <Layout sidebar={<Sidebar />}>
        <Forms>
          <forms.CreditCardForm />
          <forms.CompanyForm />
          <forms.HorizontalForm />
          <forms.ButtonsGroup />
        </Forms>
      </Layout>
    </Global>
  );
};

export const Forms = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > form {
    padding: 0 15px;
    flex: 1 0 50%;
    box-sizing: border-box;
  }
`;

export default Home;

import * as React from 'react';
import styled from 'styled-components';

import { Global } from 'lib';
import { HeaderPanel, Text, Box } from "woly";

import { CustomerForm } from '../../forms';

export const Layout: React.FC = () => (
  <Global>
    <Page>
      <HeaderBlock>
        <NavBar>
          <a href="" target="" style={{ paddingRight: '10px' }}>
            <Box><Text type="S">First Link</Text></Box>
          </a>
          <a href="" target="" style={{ paddingRight: '10px' }}>
            <Box><Text type="S">Second Link</Text></Box>
          </a>
          <a href="" target="" style={{ paddingRight: '10px' }}>
            <Box><Text type="S">Third Link</Text></Box>
          </a>
        </NavBar>
      </HeaderBlock>
      <FormBlock>
        <CustomerForm/>
      </FormBlock>
    </Page>
  </Global>
);

const Page = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  background: #F5F5F5;
  
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const HeaderBlock = styled(HeaderPanel)` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 60px;
`;

const FormBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 60px;
`;

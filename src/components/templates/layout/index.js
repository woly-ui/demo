import * as React from 'react';
import styled from 'styled-components';
import { surface } from 'woly';

import { Header } from '@components';

export const Layout = ({ sidebar, children }) => {
  const [isAsideHidden, setAsideHidden] = React.useReducer((is) => !is, false);
  return (
    <Body>
      <Aside isHidden={isAsideHidden}>{sidebar}</Aside>
      <Page fullSize={isAsideHidden}>
        <Header setAsideHidden={setAsideHidden} />
        <Content>{children}</Content>
      </Page>
    </Body>
  );
};

const Aside = styled(surface.Base)`
  --surface-background: var(--main);
  --rounding: 0;
  --padding: 0;
  width: max(200px, min(30%, 256px));
  box-shadow: 0 2px 2px 0 rgba(60, 75, 100, 0.14),
    0 3px 1px -2px rgba(60, 75, 100, 0.12), 0 1px 5px 0 rgba(60, 75, 100, 0.2);
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  @media (min-width: 768px) {
    display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  }
`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Page = styled.div`
  background: var(--base);
  flex: 1;
  margin-left: ${({ fullSize }) =>
    fullSize ? 'max(200px, min(30%, 256px))' : '0'};
  @media (min-width: 768px) {
    margin-left: ${({ fullSize }) =>
      fullSize ? '0' : 'max(200px, min(30%, 256px))'};
  }
`;

const Content = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

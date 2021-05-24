import * as React from 'react';
import styled from 'styled-components';

import { Global } from 'lib/box-styles';
import { Grid, Column, HeaderPanel, Text } from "woly";

interface LayoutProps {
  sidebar?: React.ReactNode;
  content?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ sidebar, content }) => {
  const [isAsideHidden, setAsideHidden] = React.useReducer((is) => !is, false);
  return (
    <Global>
      <Grid columns={12}>
        <Column size={2}>
          <Aside>{sidebar}</Aside>
        </Column>
        <Column size={10}>
          <Page>
            <HeaderPanel>
              <div style={{ display: 'flex', padding: '10px' }}>
                <a href="" target="" style={{ paddingRight: '10px' }}>
                  <Text type="S">First Link</Text>
                </a>
                <a href="" target="" style={{ paddingRight: '10px' }}>
                  <Text type="S">Second Link</Text>
                </a>
                <a href="" target="" style={{ paddingRight: '10px' }}>
                  <Text type="S">Third Link</Text>
                </a>
              </div>
            </HeaderPanel>

          </Page>
        </Column>
      </Grid>
    </Global>
  )
}

const Aside = styled.div`
 background: var(--main);
  --rounding: 0;
  padding: 0;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(60, 75, 100, 0.14),
    0 3px 1px -2px rgba(60, 75, 100, 0.12), 0 1px 5px 0 rgba(60, 75, 100, 0.2);
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
`;

const Page = styled.div`
  background: var(--base);
  flex: 1;
  width: 100%;
`;

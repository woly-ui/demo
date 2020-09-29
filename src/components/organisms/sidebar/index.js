import * as React from 'react';
import styled from 'styled-components';

import { chip, menuList, MenuItem } from '@components';
import { block } from '@lib/box-styles';
import { ChartPieIcon, MapIcon } from '@assets/icons';
import { menu } from '@constants';

const icons = [<ChartPieIcon />, <MapIcon />];

const menuItems = menu.map((el, key) => ({
  id: key,
  item: (
    <MenuItem
      name={el}
      icon={icons[key % 2]}
      chip={
        key > 10 ? (
          <block.N>
            <chip.Danger text="PRO" />
          </block.N>
        ) : null
      }
    />
  ),
}));

export const Sidebar = () => (
  <SidebarWrapper>
    <TopBlock>WOLY UI</TopBlock>
    <menuList.Primary menu={menuItems} />
  </SidebarWrapper>
);

export const SidebarWrapper = styled.div`
  overflow-y: scroll;
  height: 100vh;
`;

const TopBlock = styled.div`
  min-height: 56px;
  background: rgba(0, 0, 21, 0.2);
  color: var(--simple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
`;

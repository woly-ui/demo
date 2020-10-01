import styled from 'styled-components';
import { menuList as woly } from 'woly';

export const Primary = styled(woly.Base)`
  --menu-list-background: transparent;
  --shadow: none;
  --menu-list-color: var(--simple);
  --menu-list-hover: var(--accent);
  opacity: 0.8;
  font-weight: 300;
`;

export const menuList = {
  ...woly,
  Primary,
};

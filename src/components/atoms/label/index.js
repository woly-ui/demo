import styled from 'styled-components';
import { label as woly } from 'woly';

const Primary = styled(woly.Base)`
  display: inline-block;
  --label-color: var(--contast);
`;

export const label = {
  ...woly,
  Primary,
};

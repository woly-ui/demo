import styled from 'styled-components';
import { input as woly } from 'woly';

export const Primary = styled(woly.Base)`
  --rounding: 0.25rem;
  margin-top: 0.25rem;
`;

export const LeftSideRounding = styled(Primary)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 0;
`;

const RightSideRounding = styled(LeftSideRounding)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const input = {
  ...woly,
  Primary,
  LeftSideRounding,
  RightSideRounding,
};

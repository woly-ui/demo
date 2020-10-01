import styled from 'styled-components';
import { button as woly } from 'woly';

const Primary = styled(woly.Primary)`
  --button-borders: transparent;
  --button-background: var(--accent);
  --button-color: var(--simple);
  box-shadow: 0 1px 1px 0 rgba(60, 75, 100, 0.14),
    0 2px 1px -1px rgba(60, 75, 100, 0.12), 0 1px 3px 0 rgba(60, 75, 100, 0.2);
`;

const Destructive = styled(woly.Destructive)`
  --button-borders: transparent;
  --button-background: var(--danger);
  --button-color: var(--simple);
  box-shadow: 0 1px 1px 0 rgba(60, 75, 100, 0.14),
    0 2px 1px -1px rgba(60, 75, 100, 0.12), 0 1px 3px 0 rgba(60, 75, 100, 0.2);
`;

const LeftSideRounding = styled(Primary)`
  box-shadow: 0 1px 1px 0 rgba(60, 75, 100, 0.14),
    0 2px 1px -1px rgba(60, 75, 100, 0.12), 0 1px 3px 0 rgba(60, 75, 100, 0.2);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const RightSideRounding = styled(Primary)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const button = {
  ...woly,
  Destructive,
  Primary,
  LeftSideRounding,
  RightSideRounding,
};

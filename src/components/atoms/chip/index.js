import styled from 'styled-components';
import { chip as woly } from 'woly';

const Danger = styled(woly.Base)`
  --chip-background-color: var(--danger);
  --chip-color: var(--simple);
  font-weight: 700;
  --rounding: 3px;
  & > div:last-child {
    display: none;
  }
`;

const Important = styled(woly.Base)`
  --chip-background-color: var(--danger);
  --chip-color: var(--simple);
  font-weight: 700;
  --rounding: 13px;
  & > div:last-child {
    display: none;
  }
`;

const Warning = styled(woly.Base)`
  --chip-background-color: var(--warning);
  --chip-color: var(--simple);
  font-weight: 700;
  --rounding: 13px;
  & > div:last-child {
    display: none;
  }
`;

const Primary = styled(woly.Base)`
  --chip-background-color: var(--primary);
  --chip-color: var(--simple);
  font-weight: 700;
  --rounding: 13px;
  & > div:last-child {
    display: none;
  }
`;

export const chip = {
  ...woly,
  Danger,
  Warning,
  Primary,
  Important,
};

import styled from 'styled-components';
import { surface as woly } from 'woly';

const Form = styled(woly.Base)`
  --surface-background: var(--simple);
  --rounding: 0.25rem;
  --padding: 0;
  box-shadow: 0 1px 1px 0 rgba(60, 75, 100, 0.14),
    0 2px 1px -1px rgba(60, 75, 100, 0.12), 0 1px 3px 0 rgba(60, 75, 100, 0.2);
`;

export const surface = {
  ...woly,
  Form,
};

import * as React from 'react';
import styled from 'styled-components';

export const MenuItem = (props) => {
  let { name, icon, chip } = props;
  if (icon) {
    icon = <IconWrapper>{icon}</IconWrapper>;
  }
  return (
    <Menu>
      <Item>
        {icon}
        <span>{name}</span>
      </Item>
      {chip}
    </Menu>
  );
};

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  --ci-primary-color: #8a8a94;
  padding: 5px;
  margin: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

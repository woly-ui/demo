import * as React from 'react';
import styled from 'styled-components';

import { buttonIcon, menuList } from 'woly';

import {
  BellIcon,
  BurgerIcon,
  EnvelopeOpenIcon,
  ListIcon,
} from '@assets/icons';
import { chip } from '@components';
import { block } from '@lib/box-styles';
import { notificationMenu } from '@constants';

export const Header = ({ setAsideHidden }) => (
  <HeaderWrapper>
    <TopHeader>
      <buttonIcon.Base
        icon={
          <IconWrapper>
            <BurgerIcon />
          </IconWrapper>
        }
        onClick={setAsideHidden}
      />
      <RightBlock>
        <HeaderButton
          icon={<BellIcon />}
          chip={<chip.Important text="5" />}
          menu={notificationMenu}
        />
        <HeaderButton
          icon={<ListIcon />}
          chip={<chip.Warning text="7" />}
          menu={notificationMenu}
        />
        <HeaderButton
          icon={<EnvelopeOpenIcon />}
          chip={<chip.Primary text="15" />}
          menu={notificationMenu}
        />
      </RightBlock>
    </TopHeader>
  </HeaderWrapper>
);

const HeaderButton = ({ icon, chip, menu }) => {
  const [isNotificationMenuVisible, setNotificationMenu] = React.useReducer(
    (is) => !is,
    false,
  );
  return (
    <ButtonWrapper>
      <buttonIcon.Base
        icon={<IconWrapper>{icon}</IconWrapper>}
        onClick={setNotificationMenu}
      />
      <NotificationCount>{chip}</NotificationCount>
      <NotificationMenu isVisible={isNotificationMenuVisible}>
        <menuList.Base menu={menu} />
      </NotificationMenu>
    </ButtonWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
`;

const TopHeader = styled.div`
  min-height: 56px;
  background: var(--simple);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  --ci-primary-color: #8a8a94;
  padding: 5px;
  margin: 5px;
`;

const RightBlock = styled(block.N)`
  display: flex;
`;

const NotificationMenu = styled.div`
  position: absolute;
  width: 200px;
  right: 0;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const NotificationCount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

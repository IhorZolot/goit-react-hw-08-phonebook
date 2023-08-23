import React from 'react';
import { useSelector } from 'react-redux';
import {
  InlineParagraph,
  StyledLink,
  UserInfoStyled,
  UserMenuContainerStyled,
} from './userMenu.styled';

export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <UserMenuContainerStyled>
      <UserInfoStyled>Name: {user.name}</UserInfoStyled>
      <UserInfoStyled>Email: {user.email}</UserInfoStyled>
      <>
        <InlineParagraph>
          You have landed on your page, if you want to go to contacts, click
          here...
        </InlineParagraph>
        <StyledLink to="/">Contacts</StyledLink>
      </>
    </UserMenuContainerStyled>
  );
};

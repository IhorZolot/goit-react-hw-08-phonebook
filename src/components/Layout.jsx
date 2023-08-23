import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './navBar/NavBar';
import { styled } from 'styled-components';

export const Layout = () => {
  return (
    <MainContainer>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
      <Footer>Here it could be your advertisement!</Footer>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  background: linear-gradient(to right, #9bd4e2, #57cbdf);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #7bb6cb, #319dcc);
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 60px;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
`;

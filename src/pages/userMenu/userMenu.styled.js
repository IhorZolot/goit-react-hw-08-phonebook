import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserMenuContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin-top: 100px;
`;

export const UserInfoStyled = styled.p`
  font-weight: bold;
`;

export const LogoutButtonStyled = styled.button`
  background-color: #ff006f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    color: #160909;
    background-color: #ffffff;
  }
`;
export const InlineParagraph = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #333;
`;
export const StyledLink = styled(Link)`
  margin-top: 20px;
  display: block;
  font-size: 20px;
  text-decoration: none;
  border: 1px solid #160909;
  border-radius: 5px;
  padding: 5px 10px;
  color: #5175d0;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    color: #160909;
    background-color: #5175d0;
  }
`;

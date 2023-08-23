import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import {
  ButtonStyled,
  FormFieldStyled,
  InputStyled,
  LabelStyled,
  LoginContainerStyled,
  LoginFormStyled,
  LoginTitleStyled,
  SignUpLinkStyled,
} from './loginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmitLogin = event => {
    event.preventDefault();
    dispatch(loginThunk({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <LoginContainerStyled>
      <LoginTitleStyled>Login</LoginTitleStyled>
      <LoginFormStyled onSubmit={handleSubmitLogin}>
        <FormFieldStyled>
          <LabelStyled>Email:</LabelStyled>
          <InputStyled
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormFieldStyled>
        <FormFieldStyled>
          <LabelStyled>Password:</LabelStyled>
          <InputStyled
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormFieldStyled>
        <ButtonStyled type="submit">Login</ButtonStyled>
        <SignUpLinkStyled>
          <span>Not Registered?</span>
          <Link to="/register">Sign Up Here</Link>
        </SignUpLinkStyled>
      </LoginFormStyled>
    </LoginContainerStyled>
  );
};

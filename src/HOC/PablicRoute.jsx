import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/selectors';

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

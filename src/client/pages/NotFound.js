import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true; // eslint-disable-line no-param-reassign
  return <h1>Ooops! Route not found</h1>;
};

export default {
  component: NotFound,
};

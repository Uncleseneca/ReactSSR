import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuthWrapper = (ChildComponent) => {
  const requireAuth = (props) => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading</div>;

      default:
        return <ChildComponent {...props} />;
    }
  };

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(requireAuth);
};

export default requireAuthWrapper;

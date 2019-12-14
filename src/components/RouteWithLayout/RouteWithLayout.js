import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
    
  if (props.authentication) {
    return (
      <Route     
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    )
  } else {
    return (
      <Redirect to="/sign-in" />
    )
  }
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  authentication: PropTypes.bool,
};
RouteWithLayout.defaultProps = {
  authentication: true,
};

export default RouteWithLayout;

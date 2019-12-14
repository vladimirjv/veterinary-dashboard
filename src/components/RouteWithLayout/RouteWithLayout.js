import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Authentication } from 'helpers';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  // const [Authenticated, setAuthenticated] = useState(false);
    
  if (props.protected) {
    return (
      <Route {...rest} render={matchProps => Authentication.isAuthenticated() ?(
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : <Redirect to="/sign-in" />
      }
      />
    )
  } else {
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
  }
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  protected: PropTypes.bool,
};
RouteWithLayout.defaultProps = {
  protected: false,
};

export default RouteWithLayout;

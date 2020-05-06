import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = React.memo(({ staff, component: Component, ...rest }) => {
  const user = useSelector((state) => state?.auth?.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/sign-in',
                state: { from: props.location },
              }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
});

export default PrivateRoute;

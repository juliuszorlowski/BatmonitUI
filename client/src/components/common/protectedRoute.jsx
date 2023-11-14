import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!auth.getCurrentUser() || auth.getCurrentUser().isAdmin === false)
          return <Redirect to="/login" />;
        return <Component />;
      }}
    />
  );
}

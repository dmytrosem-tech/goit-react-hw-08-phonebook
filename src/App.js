import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "./Components/AppBar";
// import Container from "./Components/Container";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import { authOperations } from "./redux/auth";

const ContactsView = lazy(() => import("./views/ContactsView"));
const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="contain">
      <AppBar />

      <Suspense fallback="Wreally?)))">
        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <PublicRoute redirectTo="/">
                <HomeView />
              </PublicRoute>
            }
          ></Route>
          <Route
            exact="true"
            path="/register"
            restricted
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <RegisterView />
              </PublicRoute>
            }
          ></Route>

          <Route
            exact="true"
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

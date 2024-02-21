import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "../../ui-components/Container/Container";
import styles from './Signin.module.css';
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/hooks";

const Signin = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth])

  const fromPage = location.state?.from?.pathname || "/";

  return (
    <main>
      <Container>
        <div className={styles.block}>
          <Typography
            variant="h3"
            component="h1"
          >
            Вход
          </Typography>
          <LoginForm />
          {fromPage}
        </div>
      </Container>
    </main>
  );
};

export default Signin;

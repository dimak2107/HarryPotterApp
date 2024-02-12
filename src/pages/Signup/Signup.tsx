import { Typography } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../ui-components/Container/Container";
import styles from './Signup.module.css';
import { useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth])

  return (
    <main>
      <Container>
          <div className={styles.block}>
            <Typography
              variant="h3"
              component="h1"
            >
              Регистрация
            </Typography>
            <RegistrationForm />
          </div>
      </Container>
    </main>
  );
};

export default Signup;

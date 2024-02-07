import { Button, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { registration } from "../../store/actions/authActionCreators";
import styles from './RegistrationForm.module.css';
import ErrorDisplay from "../../ui-components/ErrorDisplay";

type Inputs = {
  username: string;
  password: string;
}

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector(state => state.authReducer);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {username, password} = data;
    dispatch(registration(username, password));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <OutlinedInput
        {...register('username', { required: true, minLength: 5 })}
        type="text"
        className={styles.input}
      />
      <ErrorDisplay fieldWithError={errors.username} />
      <OutlinedInput
        {...register('password', { required: true, minLength: 5 })}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        sx={{marginTop: '3px'}}
        className={styles.input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(true)}
              onMouseDown={() => setShowPassword(false)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      <ErrorDisplay fieldWithError={errors.password} />
      <Button
        variant="outlined"
        sx={{marginTop: '10px'}}
        className={styles.input}
        type="submit"
      >
        Зарегистрироваться
      </Button>
      {error && (
        <Typography
          component="span"
          variant="h2"
          color="error"
        >
          {error}
        </Typography>
      )}
    </form>
  )
}

export default RegistrationForm;
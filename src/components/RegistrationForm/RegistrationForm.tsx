import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { registration } from "../../store/actions/authActionCreators";
import styles from './RegistrationForm.module.css';
import ErrorDisplay from "../../ui-components/ErrorDisplay";
import PasswordInput from "../../ui-components/PasswordInput/PasswordInput";

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
      <Box sx={{marginTop: '3px'}}>
        <PasswordInput
          register={register}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          validatingObj={{ required: true, minLength: 5 }}
        />
      </Box>
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
          sx={{marginTop: '20px'}}
          component="span"
          variant="body1"
          color="error"
        >
          {error}
        </Typography>
      )}
    </form>
  )
}

export default RegistrationForm;
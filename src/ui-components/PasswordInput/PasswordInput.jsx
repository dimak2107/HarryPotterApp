import { Visibility, VisibilityOff } from "@mui/icons-material";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material"
import propTypes from 'prop-types';
import styles from './PasswordInput.module.css';

function PasswordInput({register, showPassword, setShowPassword, validatingObj}) {
  return (
    <>
      <OutlinedInput
        {...register('password', validatingObj)}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
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
    </>
  )
}

PasswordInput.propTypes = {
  register: propTypes.func,
  showPassword: propTypes.bool,
  setShowPassword: propTypes.func,
  validatingObj: propTypes.object
};

export default PasswordInput;
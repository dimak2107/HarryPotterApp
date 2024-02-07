import { FieldError } from "react-hook-form";
import { Typography } from "@mui/material";

interface ErrorDisplayProps {
  fieldWithError: FieldError | undefined;
}

function ErrorDisplay({fieldWithError}: ErrorDisplayProps) {
  return (
    <div>
      {fieldWithError?.type === 'required' && (
        <Typography
          component="span"
          variant="body1"
          color="error"
        >
          Это поле обязательно для заполнения
        </Typography>
      )}
      {fieldWithError?.type === 'minLength' && (
        <Typography
          component="span"
          variant="body1"
          color="error"
        >
          Минимальная длина 5
        </Typography>
      )}
    </div>
  )
}

export default ErrorDisplay;
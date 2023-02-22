import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

const InputField = ({
  control,
  name,
  rules,
  autoFocus = false,
  label,
  isRequired,
  type,
  inputProps,
  disabled,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  return (
    <TextField
      required={isRequired}
      type={type ? type : ''}
      fullWidth
      disabled={disabled}
      value={field.value || ''}
      label={label}
      name={field.name}
      inputProps={inputProps ? inputProps : {}}
      onChange={field.onChange}
      autoFocus={autoFocus}
      error={fieldState.invalid}
      helperText={fieldState?.error?.message}
    />
  );
};

export default InputField;

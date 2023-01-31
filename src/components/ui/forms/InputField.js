import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

const InputField = ({ control, name, rules, autoFocus = false, label }) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  return (
    <TextField
      required
      fullWidth
      value={field.value || ''}
      id={field.name}
      label={label}
      name={field.name}
      onChange={field.onChange}
      autoFocus={autoFocus}
      error={fieldState.invalid}
      helperText={fieldState?.error?.message}
    />
  );
};

export default InputField;

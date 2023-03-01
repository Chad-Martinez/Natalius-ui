import { useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({
  control,
  name,
  rules,
  label,
  isRequired,
  onCustomValidate,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const handleValidateDate = () => {
    onCustomValidate(field.value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat='MM/DD/YYYY'
        value={field.value || null}
        onChange={field.onChange}
        onAccept={handleValidateDate}
        renderInput={(params) => (
          <TextField
            required={isRequired}
            onBlur={handleValidateDate}
            {...params}
            fullWidth
            value={field.value || null}
            id={field.name}
            name={field.name}
            error={fieldState.invalid}
            helperText={fieldState?.error?.message}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;

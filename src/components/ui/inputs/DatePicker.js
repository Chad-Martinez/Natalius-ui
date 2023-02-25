import { useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const DatePicker = ({
  control,
  name,
  baseRules,
  label,
  isRequired,
  onCustomValidate,
}) => {
  const validateDob = (value) => {
    if (dayjs(value).isValid() && Date.parse(value) < Date.now()) {
      return true;
    } else {
      return 'Invalid Date';
    }
  };
  const rules = {
    ...baseRules,
    validate: {
      value: validateDob,
    },
  };
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

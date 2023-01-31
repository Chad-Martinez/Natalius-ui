import InputMask from 'react-input-mask';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

const ZipCodeInput = ({ control, name }) => {
  const validateZip = (value) => {
    const [firstHalf, secondHalf] = value.split('-');
    if (firstHalf.trim().length < 5) {
      return false;
    } else if (secondHalf.trim().length > 0 && secondHalf.trim().length < 4) {
      return false;
    }
    return true;
  };
  const rules = {
    required: {
      value: true,
    },
    validate: validateZip,
  };
  const { field, fieldState } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <InputMask
      mask='99999-9999'
      value={field.value || ''}
      maskChar=' '
      onChange={field.onChange}
    >
      {() => (
        <TextField
          required
          fullWidth
          id='zip'
          label={'Zip Code'}
          name={'zip'}
          error={fieldState.invalid}
          helperText={fieldState.invalid && 'Please enter a zip code'}
        />
      )}
    </InputMask>
  );
};

export default ZipCodeInput;

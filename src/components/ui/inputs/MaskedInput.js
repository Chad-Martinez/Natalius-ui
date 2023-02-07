import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import InputMask from 'react-input-mask';

const MaskedInput = ({
  mask,
  name,
  control,
  label,
  validator,
  isRequired,
  errorMessage,
}) => {
  const validateHandler = (value) => {
    if (validator === 'phone') {
      if (
        !value.match(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        )
      ) {
        return false;
      }
      return true;
    } else if (validator === 'zip') {
      const [firstHalf, secondHalf] = value.split('-');
      if (firstHalf.trim().length < 5) {
        return false;
      } else if (secondHalf.trim().length > 0 && secondHalf.trim().length < 4) {
        return false;
      }
      return true;
    }
  };

  const rules = {
    required: {
      value: isRequired,
    },
    validate: validateHandler,
  };
  const { field, fieldState } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <InputMask
      mask={mask}
      value={field.value || ''}
      maskChar=' '
      onChange={field.onChange}
    >
      {() => (
        <TextField
          required={isRequired}
          fullWidth
          id={name}
          label={label}
          name={name}
          error={fieldState.invalid}
          helperText={fieldState.invalid && errorMessage}
        />
      )}
    </InputMask>
  );
};

export default MaskedInput;

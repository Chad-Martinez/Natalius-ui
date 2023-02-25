import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  Autocomplete,
  TextField,
} from '@mui/material';
import { Fragment } from 'react';
import { useController } from 'react-hook-form';

const SelectInput = ({
  control,
  name,
  rules,
  listArray,
  label,
  isRequired,
  errorMessage,
  autoCompleter,
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });
  const itemsList = autoCompleter
    ? listArray.map(({ id, item }) => {
        return { label: item, id: id };
      })
    : listArray.map(({ id, item }) => {
        return (
          <MenuItem key={id} value={id}>
            {item}
          </MenuItem>
        );
      });

  const autoCompleteHandler = (e, newValue) => {
    field.onChange(newValue);
  };
  return (
    <Fragment>
      {autoCompleter ? (
        <Autocomplete
          disablePortal
          id={name}
          options={itemsList}
          fullWidth
          onChange={autoCompleteHandler}
          renderInput={(params) => (
            <TextField
              required={isRequired}
              name={name}
              value={field.value}
              {...params}
              label={label}
              error={fieldState.invalid}
              helperText={fieldState?.error?.message}
            />
          )}
        />
      ) : (
        <FormControl fullWidth error={fieldState.invalid} required={isRequired}>
          <InputLabel>{label}</InputLabel>
          <Select
            id={name}
            name={name}
            value={field.value || ''}
            label={name}
            onChange={field.onChange}
          >
            {itemsList}
          </Select>
          <FormHelperText>{fieldState.invalid && errorMessage}</FormHelperText>
        </FormControl>
      )}
    </Fragment>
  );
};

export default SelectInput;

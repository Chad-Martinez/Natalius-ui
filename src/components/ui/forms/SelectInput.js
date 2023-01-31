import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from '@mui/material';
import { useController } from 'react-hook-form';

const SelectInput = ({ control, name, rules, listArray, label }) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });
  const itemsList = listArray.map(({ id, item }) => {
    return (
      <MenuItem key={id} value={id}>
        {item}
      </MenuItem>
    );
  });
  return (
    <FormControl fullWidth error={fieldState.invalid}>
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
      <FormHelperText>{fieldState.invalid && 'Select a state'}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;

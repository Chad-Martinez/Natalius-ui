import { useRef, useEffect, useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { TextField } from '@mui/material';

const GoogleAutoCompleter = ({
  control,
  name,
  rules,
  label,
  isRequired,
  setAddress,
  clearErrors,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const setAddressValues = (value) => {
    if (value) clearErrors('address');
    let number;
    let address;
    let city;
    let state;
    let zip;
    for (const component of value.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case 'street_number': {
          number = `${component.long_name}`;
          break;
        }

        case 'route': {
          address = `${component.long_name}`;
          break;
        }

        case 'locality': {
          city = `${component.long_name}`;
          break;
        }

        case 'administrative_area_level_1': {
          state = `${component.short_name}`;
          break;
        }

        case 'postal_code': {
          zip = `${component.long_name}`;
          break;
        }

        default: {
          break;
        }
      }
    }
    const patientAddress = {
      address: `${number} ${address}`,
      city,
      state,
      zip,
    };
    setAddress('address', patientAddress);
  };

  const loadMapService = async () => {
    const options = {
      componentRestrictions: { country: 'us' },
      fields: ['address_components'],
    };
    try {
      autoCompleteRef.current =
        await new window.google.maps.places.Autocomplete(
          inputRef.current,
          options
        );
      let place;
      autoCompleteRef.current.addListener('place_changed', async () => {
        place = await autoCompleteRef.current.getPlace();
        setAddressValues(place);
      });
    } catch (error) {
      console.log('GOOGLE SERVICE ERROR ', error);
    }
  };

  const verifyGoogleIsLoaded = useCallback(() => {
    if (window.google) {
      loadMapService();
      setIsGoogleLoaded(true);
    } else {
      window.location.reload(false);
    }
  }, []);

  useEffect(() => {
    if (!isGoogleLoaded) {
      verifyGoogleIsLoaded();
    }
  }, [isGoogleLoaded, verifyGoogleIsLoaded]);

  return (
    <TextField
      required={isRequired}
      type='input'
      fullWidth
      inputRef={inputRef}
      label={label}
      name={field.name}
      error={fieldState.invalid}
      helperText={fieldState?.error?.message}
    />
  );
};
export default GoogleAutoCompleter;

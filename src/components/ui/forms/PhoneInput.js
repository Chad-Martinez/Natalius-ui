import { memo } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

export const MemoizedPhoneInputField = ({
  phone,
  setPhoneError,
  phoneError,
  setPhone,
}) => {
  const validatePhoneHandler = () => {
    if (
      !phone.match(/^[+]?[(]?[0-9]{4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im)
    ) {
      return setPhoneError(true);
    }
    setPhoneError(false);
  };

  return (
    <PhoneInput
      inputStyle={{
        width: '100%',
        borderColor: phoneError ? 'red' : '',
        color: phoneError ? 'red' : '',
        boxShadow: phoneError ? '0 0 0 1px red' : '',
      }}
      containerStyle={{
        color: phoneError ? 'red' : '',
      }}
      country={'us'}
      value={phone}
      onChange={(value) => setPhone(value)}
      specialLabel={
        phoneError
          ? 'Please enter a valid phone number and country code'
          : 'Phone *'
      }
      inputProps={{
        name: 'phone',
        id: 'phone',
      }}
      name='phone'
      jumpCursorToEnd={true}
      onBlur={validatePhoneHandler}
    />
  );
};

export const PhoneInputField = memo(MemoizedPhoneInputField);

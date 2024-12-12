import React, { useState, useEffect } from 'react';
import ReactCodeInput from 'react-code-input';

interface PinCodeProps {
  correctPinCode: string;
  onPinCodeValidated: (isValid: boolean) => void;
}

const PinCode: React.FC<PinCodeProps> = ({ correctPinCode, onPinCodeValidated }) => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState('');

  useEffect(() => {
    if (pinCode.length === 3) {
      const isValid = pinCode === correctPinCode;
      setIsPinCodeValid(isValid);
      onPinCodeValidated(isValid);
      if (!isValid) setPinCode('');
    }
  }, [pinCode, correctPinCode, onPinCodeValidated]);

  const handlePinChange = (value: string) => {
    setPinCode(value);
    setIsPinCodeValid(true);
    console.log(isPinCodeValid);
  };

  return (
    <ReactCodeInput
      name="pinCode"
      type="password"
      fields={3}
      onChange={handlePinChange}
      value={pinCode}
      inputMode="numeric"
      inputStyle={{
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '0 5px',
        width: '60px',
        height: '70px',
        textAlign: 'center',
        borderRadius: '10px',
        border: '2px solid var(--primary-color)',
        background: 'transparent',
        color: 'var(--primary-text-color)'
      }}
      autoFocus={false}
    />
  );
};

export default PinCode;

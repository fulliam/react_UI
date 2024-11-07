import React, { useState, useEffect } from 'react';
import Select from '@/components/UI/inputs/select/select';
import Input from '@/components/UI/inputs/base/base';
import { countryOptions, getPhoneMask, phoneRegexes } from './data';
import './phone.scss';

type CountryCode = keyof typeof phoneRegexes;

interface PhoneInputProps {
  onPhoneChange: (phone: string, error: string | null) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onPhoneChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode | null>(null);
  const [phoneMask, setPhoneMask] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (item: any) => {
    const countryCode = item ? (item.id as CountryCode) : null;
    setSelectedCountry(countryCode);
    setPhone('');
    setError(null);
  };

  useEffect(() => {
    if (selectedCountry) {
      setPhoneMask(getPhoneMask(selectedCountry));
    }
  }, [selectedCountry]);

  const validatePhone = (phone: string) => {
    if (selectedCountry && phoneRegexes[selectedCountry]) {
      const regex = phoneRegexes[selectedCountry];
      if (!regex.test(phone.replace(/[^0-9+]/g, ''))) {
        return 'Неверный формат номера для выбранной страны';
      }
    } else {
      const regex = phoneRegexes[countryOptions[0].id as CountryCode];
      if (!regex.test(phone.replace(/[^0-9+]/g, ''))) {
        return 'Неверный формат номера для выбранной страны';
      }
    }
    return null;
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    const newError = validatePhone(value);
    setError(newError);
    onPhoneChange(value, newError);
  };

  return (
    <div className="phone">
      <Select
        options={countryOptions}
        label="Страна"
        placeholder="Страна"
        onSelect={handleSelect}
        value={selectedCountry || countryOptions[0].id}
        enableFilter
        full
      />

      <Input
        type="tel"
        value={phone}
        label="Телефон"
        placeholder={phoneMask ? phoneMask : getPhoneMask(countryOptions[0].id)}
        maska={phoneMask ? phoneMask : getPhoneMask(countryOptions[0].id)}
        error={error || undefined}
        onChange={handlePhoneChange}
        full
      />
    </div>
  );
};

export default PhoneInput;

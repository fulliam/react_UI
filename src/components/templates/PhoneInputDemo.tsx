import React, { useState } from 'react';
import PhoneInput from '@/components/UI/inputs/phone/phone';

const PhoneInputDemo: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleChangePhone = (phone: string, error: string | null) => {
    setPhone(phone);
    setPhoneError(error);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента PhoneInput</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Статус:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ввод телефона и отправка</td>
            <td>
              <PhoneInput onPhoneChange={handleChangePhone} />
            </td>
            <td>{phone}, {phoneError || 'Готово к отправке'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneInputDemo;

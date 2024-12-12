import React, { useState } from 'react';
import PinCode from '@/components/UI/inputs/pin/pin';

const PinCodeInputDemo: React.FC = () => {
  const [isPinValid, setIsPinValid] = useState<boolean | null>(null);
  const correctPinCode = '123';

  const handlePinCodeValidation = (isValid: boolean) => {
    setIsPinValid(isValid);
  };

  return (
    <div className="demo-page">
      <h1>Демонстрация возможностей компонента PinCode (lib)</h1>
      <table>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Компонент</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Пин-код (123)</td>
            <td>
              <PinCode
                correctPinCode={correctPinCode}
                onPinCodeValidated={handlePinCodeValidation}
              />
            </td>
            <td>
              {isPinValid === null ? 'Ожидание ввода' : isPinValid ? 'Код верный' : 'Код неверный'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PinCodeInputDemo;

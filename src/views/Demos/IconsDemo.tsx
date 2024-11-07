import React from 'react';

import Checkmark from '@/assets/icons/Checkmark';
import Chevron from '@/assets/icons/Chevron';
import CrossEye from '@/assets/icons/CrossEye';
import Eye from '@/assets/icons/Eye';
import Google from '@/assets/icons/Google';
import Instagram from '@/assets/icons/Instagram';
import Loupe from '@/assets/icons/Loupe';
import Message from '@/assets/icons/Message';
import Moon from '@/assets/icons/Moon';
import Phone from '@/assets/icons/Phone';
import Sun from '@/assets/icons/Sun';
import SwitchActive from '@/assets/icons/SwitchActive';
import SwitchDisabled from '@/assets/icons/SwitchDisabled';
import Twitter from '@/assets/icons/Twitter';
import Vk from '@/assets/icons/Vk';
import Youtube from '@/assets/icons/Youtube';

interface IconItem {
  name: string;
  component: React.ReactNode;
}

const icons: IconItem[] = [
  { name: 'Checkmark', component: <Checkmark /> },
  { name: 'Chevron', component: <Chevron /> },
  { name: 'CrossEye', component: <CrossEye /> },
  { name: 'Eye', component: <Eye /> },
  { name: 'Google', component: <Google /> },
  { name: 'Instagram', component: <Instagram /> },
  { name: 'Loupe', component: <Loupe /> },
  { name: 'Message', component: <Message /> },
  { name: 'Moon', component: <Moon /> },
  { name: 'Phone', component: <Phone /> },
  { name: 'Sun', component: <Sun /> },
  { name: 'SwitchActive', component: <SwitchActive /> },
  { name: 'SwitchDisabled', component: <SwitchDisabled /> },
  { name: 'Twitter', component: <Twitter /> },
  { name: 'Vk', component: <Vk /> },
  { name: 'Youtube', component: <Youtube /> }
];

const IconsDemo: React.FC = () => {
  return (
    <div className="demo-page">
      <h1>Демонстрация иконок</h1>

      <table style={{ borderRadius: '0' }}>
        <tbody
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            width: '100%',
            fill: 'var(--primary-text-color)',
            color: 'var(--primary-text-color)',
            padding: '10px'
          }}
        >
          {icons.map((icon) => (
            <tr key={icon.name}>
              <td style={{ border: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon.component}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IconsDemo;

import React, { useState, useRef, useEffect } from 'react';
import './dropdown.scss';

interface IDropdown {
  theme?: 'primary' | 'secondary' | 'danger';
  options: { id: number; name: string; action?: () => void }[];
  children?: React.ReactNode;
  disabled?: boolean;
}

const Dropdown: React.FC<IDropdown> = ({
  theme = 'primary',
  options,
  children,
  disabled = false
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`dropdown ${disabled ? 'disabled' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <button
        className={`button ${theme} ${open ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
      >
        {children}
      </button>
      <div className={`list ${open ? 'open' : ''}`}>
        {!disabled &&
          options.map((item) => (
            <div key={item.id} className="list__item" onClick={item.action}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;

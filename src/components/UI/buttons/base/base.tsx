import React, { useState } from 'react';
import './base.scss';

interface ButtonProps {
  label?: string;
  theme?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'tertiary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-danger'
    | 'outline-tertiary';
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  theme = 'primary',
  onClick,
  disabled,
  children
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;

    if (onClick) {
      setIsLoading(true);
      try {
        await onClick();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <button disabled={isLoading || disabled} className={`btn btn--${theme}`} onClick={handleClick}>
      {isLoading && <span className="loader"></span>}
      <span style={{ opacity: isLoading ? 0 : 1 }}>
        {children} {/* Отображение иконки */}
        {label}
      </span>
    </button>
  );
};

export default Button;

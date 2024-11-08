import React, { useState, useRef, useEffect } from 'react';
import Chevron from '@/assets/icons/Chevron';
import Input from '@/components/UI/inputs/base/base';
import './select.scss';

interface Option {
  id: any;
  name: string | number | null;
  image?: string;
  [key: string]: any;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  value?: number | string | null;
  options?: Option[];
  enableOptionDescription?: boolean;
  optionDescriptionParams?: { path: string; separator?: string }[];
  required?: boolean;
  error?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  big?: boolean;
  dark?: boolean;
  full?: boolean;
  keyToDisplay?: string;
  enableFilter?: boolean;
  onSelect?: (item: Option | null) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  value = null,
  options = [],
  enableOptionDescription,
  optionDescriptionParams,
  required,
  error,
  readonly = true,
  disabled,
  big,
  dark,
  full,
  keyToDisplay,
  enableFilter = false,
  onSelect
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentInput, setCurrentInput] = useState<number | string | null>(value);
  const [filterInput, setFilterInput] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (keyToDisplay && options.length > 0) {
      const foundItem = options.find((i) => i[keyToDisplay] === value);
      setCurrentInput(foundItem ? foundItem.id : null);
    }
  }, [value, options, keyToDisplay]);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.name?.toString().toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  }, [filterInput, options]);

  const getDescription = (item: Option) => {
    if (!optionDescriptionParams) return '';
    return optionDescriptionParams
      .map((param) => {
        const value = getNestedProperty(item, param.path);
        return value ? `${value}${param.separator || ''}` : '';
      })
      .filter(Boolean)
      .join(' ');
  };

  const getNestedProperty = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const getDisplayValue = () => {
    const foundItem = options.find((i) => i.id === currentInput);
    return foundItem ? foundItem[keyToDisplay || 'name'] : '';
  };

  const handleChange = (id: number | string | null, item: Option) => {
    if (currentInput === id) {
      setCurrentInput(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      setCurrentInput(id);
      if (onSelect) {
        onSelect(item);
      }
    }
    setOpen(false);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleDocumentClick);
    return () => {
      document.removeEventListener('mouseup', handleDocumentClick);
    };
  }, []);

  return (
    <div
      className={`select ${disabled ? 'disabled' : ''} ${error ? 'error' : ''} ${big ? 'big' : ''} ${dark ? 'dark' : ''} ${full ? 'full' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      {label && <label className={required ? 'required' : ''}>{label}</label>}
      <div ref={inputRef} className="input" onClick={toggleOpen}>
        {options.find((i) => i.id === currentInput)?.image && (
          <img
            src={options.find((i) => i.id === currentInput)?.image}
            alt={options.find((i) => i.id === currentInput)?.id}
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={getDisplayValue()}
          readOnly={readonly}
          className={options.find((i) => i.id === currentInput)?.image ? 'fix-position' : ''}
        />
        <Chevron className={`chevron ${open ? 'open' : ''}`} />
      </div>
      {open && (
        <div ref={selectRef} className={`list ${open ? 'open' : ''}`}>
          {enableFilter && (
            <Input
              placeholder="Поиск..."
              value={filterInput}
              onChange={(val: any) => setFilterInput(val)}
            />
          )}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((item) => (
              <div
                key={item.id}
                className={`list__item ${currentInput === item.id ? 'selected' : ''} ${item.image ? 'fix-position' : ''}`}
                onClick={() => handleChange(item.id, item)}
              >
                {item.image && <img src={item.image} alt={item.id} />}
                <span className={item.image ? 'fix-position' : ''}>{item.name}</span>
                {enableOptionDescription && <p>{getDescription(item)}</p>}
              </div>
            ))
          ) : (
            <div className="list__item">Нет данных</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;

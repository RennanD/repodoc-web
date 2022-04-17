import { ComponentType, InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ComponentType<IconBaseProps>;
}

export function TextInput({
  label,
  id,
  type = 'text',
  icon: Icon,
  ...rest
}: TextInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div
        className={`${styles.container} ${isFocused ? styles.focused : ''} `}
      >
        <Icon size={20} color={isFocused ? '#633BBC' : '#8D8D99'} />
        <input
          id={id}
          type={type}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}

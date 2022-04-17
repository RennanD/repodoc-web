import { useField } from '@unform/core';
import { ComponentType, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss';

type TextInputProps = JSX.IntrinsicElements['input'] & {
  label: string;
  icon: ComponentType<IconBaseProps>;
  name: string;
};

export function TextInput({
  label,
  name,
  type = 'text',
  icon: Icon,
  ...rest
}: TextInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!defaultValue);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div
        className={`${styles.container} ${isFocused ? styles.focused : ''} `}
      >
        <Icon size={20} color={isFocused || isFilled ? '#633BBC' : '#8D8D99'} />
        <input
          ref={inputRef}
          id={name}
          type={type}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}

import PhoneInputLib, { CountryData } from 'react-phone-input-2';
import cn from 'classnames';

import './phone-input.scss';

interface PhoneInputProps {
  value: string;
  onChange: (
    value: string,
    country: CountryData,
    e: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => void;
  isError?: boolean;
  className?: string;
  placeholder?: string;
  country: CountryData['name'];
}

export const PhoneInput = ({
  value,
  onChange,
  isError,
  className,
  placeholder,
  country,
}: PhoneInputProps) => {
  return (
    <PhoneInputLib
      country={country}
      value={value}
      onChange={onChange}
      inputClass='input'
      specialLabel=''
      containerClass={cn('phone-input-container', className, { error: isError })}
      dropdownClass='phone-input-dropdown'
      placeholder={placeholder}
    />
  );
};

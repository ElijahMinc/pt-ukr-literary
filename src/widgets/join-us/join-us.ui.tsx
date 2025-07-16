'use client';

import { Input } from '@/ui/input/input.ui';
import { Button } from '@/ui/button/button.ui';
import { Controller, useForm } from 'react-hook-form';

import { PhoneInput } from '@/ui/phone-input/phone-input.ui';
import { useState } from 'react';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js/min';

import './join-us.scss';
import { Spinner } from '@/ui/spinner/spinner.ui';

interface ISheetForm {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

export const JoinUsWidget = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ISheetForm>();

  const [countryCode, setCountryCode] = useState<CountryCode>('PT');

  const onSubmit = async (data: ISheetForm) => {
    try {
      const res = await fetch('/api/google-sheets', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const result = await res.json();

      if (result.data) {
        reset();
        alert('Message sent!');
      } else {
        alert('Error sending message');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <section id='join-us' className='section-join-us'>
      <h3 className='section-join-us__title'>Join us</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='join-us-form'>
        <div>
          <Input
            placeholder='Your Name'
            {...register('name', { required: 'Name is required' })}
            isError={!!errors.name}
          />
          {errors.name && <p className='input-error'>{errors.name.message}</p>}
        </div>

        <div>
          <Input
            placeholder='Your Surname'
            {...register('surname', { required: 'Surname is required' })}
            isError={!!errors.surname}
          />
          {errors.surname && <p className='input-error'>{errors.surname.message}</p>}
        </div>

        <div>
          <Controller
            name='phone'
            control={control}
            rules={{
              required: 'Phone number is required',
              validate: (value) => {
                try {
                  const phone = parsePhoneNumber(value, countryCode); // автоопределение страны
                  if (!phone.isValid()) return 'Invalid phone number';
                  return true;
                } catch {
                  return 'Invalid phone number format';
                }
              },
            }}
            render={({ field: { onChange, ...restField } }) => (
              <PhoneInput
                {...restField}
                country='pt'
                placeholder='Your phone'
                onChange={(value, country) => {
                  onChange(value);
                  if (country?.countryCode) {
                    setCountryCode(country.countryCode.toUpperCase() as CountryCode);
                  }
                }}
              />
            )}
          />
          {errors.phone && <p className='input-error'>{errors.phone.message}</p>}
        </div>

        <div>
          <Input
            type='email'
            placeholder='Your Email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            isError={!!errors.email}
          />
          {errors.email && <p className='input-error'>{errors.email.message}</p>}
        </div>

        <div>
          <Input
            as='textarea'
            placeholder='Message'
            {...register('message', { required: 'Message is required' })}
            isError={!!errors.message}
            rows={4}
          />
          {errors.message && <p className='input-error'>{errors.message.message}</p>}
        </div>

        <Button type='submit' disabled={isSubmitting} icon={isSubmitting ? <Spinner /> : null}>
          {isSubmitting ? null : 'Apply'}
        </Button>
      </form>
    </section>
  );
};

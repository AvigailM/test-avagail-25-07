import React, { useState, useRef, useCallback, FormEvent } from 'react';
import SelectWithFilter from './SelectWithFilter';
import Input from './Input';
import { firstNameLabel, lastNameLabel, options, placeholderSearch } from '../utils/const';
import { FormData } from '../utils/types';


const UserForm = () => {
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    address: '',
  });

  const formDataRef = useRef<FormData>({
    firstName: '',
    lastName: '',
    address: '',
  });

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formDataRef.current[name as 'firstName' | 'lastName' ] = value;
  }, []);

  const handleChangeSelect = useCallback((selectedData: string) => {
    formDataRef.current['address'] = selectedData;
  }, []);

  const validateForm = (formData: FormData) => {
    const errors: Partial<FormData> = {};

    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }

    return errors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = formDataRef.current;
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully!', formData);
      setFormData(formData);
      setErrors({});
    } else {
      console.log('Validation Errors:', validationErrors);
      setErrors(validationErrors);
      console.log('Form submission failed due to validation errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={firstNameLabel}
        handleChange={handleChangeInput}
        defaultValue={formData.firstName}
        error={errors?.firstName}
        name="firstName"
      />
      <Input
        label={lastNameLabel}
        handleChange={handleChangeInput}
        defaultValue={formData.lastName}
        error={errors?.lastName}
        name="lastName"
      />
      <SelectWithFilter
        placeholderSearch={placeholderSearch}
        options={options}
        handleChange={handleChangeSelect}
        isMulti={true}
      />
      <button className='button-submit' type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

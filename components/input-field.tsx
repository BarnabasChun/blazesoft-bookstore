import React from 'react';
import { Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(({ label, isRequired, errorMessage, ...props }, ref) => {
  return (
    <Field>
      <Label className="block text-sm font-bold mb-2">{label} {isRequired && <span className='text-red-500'>*</span>}</Label>
      <HeadlessInput
        ref={ref}
        className={clsx(
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          errorMessage && "border-red-500"
        )}
        {...props}
      />
      {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}
    </Field>
  );
});

InputField.displayName = "InputField";

export default InputField;
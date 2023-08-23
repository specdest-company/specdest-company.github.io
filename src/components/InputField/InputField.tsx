import { FC } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  pattern?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  required,
  pattern,
}) => {
  return (
    <div className="mt-8">
      <label
        htmlFor={name}
        className="block xl:text-[1.25rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] text-primary">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          required={required}
          rows={5}
          id={name}
          name={name}
          placeholder={placeholder}
          className="mt-2 px-6 py-3 w-full border-[1px] border-gray-300 rounded-[10px] bg-transparent lg:text-[20px]"
        />
      ) : (
        <input
          required={required}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          className="mt-2 px-6 py-3 w-full border-[1px] border-gray-300 rounded-[10px] bg-transparent lg:text-[20px]"
        />
      )}
    </div>
  );
};

export default InputField;

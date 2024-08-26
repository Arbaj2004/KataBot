import React from "react";

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`appearance-none border-2 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${error ? 'border-red-500' : 'border-green-600'} focus:border-green-800`}
        style={{ borderRadius: 'calc(0.5 * 2.5rem)' }} // 2.5rem is the height (including padding)
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default InputField;



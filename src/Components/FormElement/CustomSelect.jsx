import React from 'react';
import Select from 'react-select';

const CustomSelect = (props) => {
  const defaultValue = (options, value) => {
    return value
      ? props?.multiple
        ? value.map((data) => {
            return options.find((option) => option.value === data);
          })
        : options.find((option) => option.value === value)
      : '';
  };

  return (
    <Select
      className="category-select w-100"
      options={props.dropDownData}
      onChange={(e) => props.onChange(e)}
      value={defaultValue(props.dropDownData, props.value)}
      isMulti={props?.multiple ? true : false}
      styles={{
        menu: (base) => ({
          ...base,
          zIndex: 9999, // Ensures dropdown appears above all other content
          position: 'absolute',
        }),
      }}
    />
  );
};

export default CustomSelect;

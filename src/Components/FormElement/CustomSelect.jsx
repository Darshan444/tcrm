import React, { useEffect, useState } from "react";
import 'select2';
import PropTypes from 'prop-types';

const CustomSelect = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    useEffect(() => {
        setTimeout(() => {
            // eslint-disable-next-line no-undef
            const $selectElement = $('.category-select');
            $selectElement.select2({
                placeholder: "Select a category",
                allowClear: false,
            });

            $selectElement.on('change', handleSelectChange);

            return () => {
                if ($selectElement.data('select2')) {
                    $selectElement.select2('destroy');
                }
            };
        }, 1000)
    }, []);

    return (
        <select
            className="category-select w-100"
            defaultValue={selectedValue}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

CustomSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
};

export default CustomSelect;

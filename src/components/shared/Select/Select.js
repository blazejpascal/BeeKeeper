import React from 'react';

import './Select.scss'

const Select = ({name, label, options, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}> { label }</label>
            <select name={name} id={name} {...rest} className="selectInput">
                <option value="" />
                {
                    options.map( option => (
                        <option key={option.id} value={option.id}>
                            {option.title || option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="alert alert-danger"> {error}</div>}
        </div>
    );
};

export default Select;

import React from 'react';

import './Input.scss'

const Input = ({ name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input  {...rest}
                type="text"
                name={name}
                id={name}
                className="textInput"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;

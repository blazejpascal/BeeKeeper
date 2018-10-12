import React from 'react';

import './TextArea.scss'

const Textarea = ({ name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea  {...rest}
                    name={name}
                    id={name}
                    className="textArea"
            />
            {error && <div className="alert alert__danger">{error}</div>}
        </div>
    );
};

export default Textarea;
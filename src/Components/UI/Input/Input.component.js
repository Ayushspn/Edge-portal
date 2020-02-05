import React from 'react';

const Input = ({ type, setInputValue, value, name, label }) => {
    switch (type) {
        case 'text':
            return (
                <>
                <label>{label} :</label>
                <input type={type} onChange={setInputValue} value={value} name={name} />
                </>
            )
        case 'password':
            return (
                <>
                <label>{label} :</label>
                <input type={type} onChange={setInputValue} value={value} name={name} />
                </>
            )
        default:
            return (
                <input type='text' />
            )
    }
}
export default Input;
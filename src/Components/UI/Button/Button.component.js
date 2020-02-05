import React from 'react';

const Button = (props) => {
    const {type , children , onCancelClick} = props;
    switch (type) {
        case 'submit':
    return( <button type={type}>{children}</button>)
        default:
    return( <button type= 'button' onClick = {onCancelClick}> {children}</button>)
    }
   
}
export default Button;
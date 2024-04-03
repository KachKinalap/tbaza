import React from 'react';

const MyButton = (props) => {
    return (
        <div className="button">
            {props.text}
        </div>
    );
};

export default MyButton;

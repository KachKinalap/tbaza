import React from 'react';
import {ScreenSeparatorCont} from "../styled";

const ScreenSeparator = (props) => {
    return (
        <ScreenSeparatorCont>
            <h2>{props.title}</h2>
        </ScreenSeparatorCont>
    );
};

export default ScreenSeparator;

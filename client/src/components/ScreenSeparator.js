import React from 'react';
import {ScreenSeparatorCont} from "../styled";
import navimg from "../static/icons/logo_nav.png";

const ScreenSeparator = (props) => {
    return (
        <ScreenSeparatorCont>
            <div style={{flex: .3}}>
                <img src={navimg} width="70%" alt="logo"/>
            </div>
            <h2 style={{flex: .5}}>{props.title}</h2>
            <div style={{flex: .3}}>
                <img src={navimg} width="70%" alt="logo"/>
            </div>
        </ScreenSeparatorCont>
    );
};

export default ScreenSeparator;

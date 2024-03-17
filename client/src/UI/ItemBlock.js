import React from 'react';
import { BorderTextCont, BorderTextContHeader } from "../styled";
import ItemBlockNotice from "./ItemBlockNotice";

const ItemBlock = (props) => {
    return (
        <BorderTextCont style={{border: props.color}}>
            <BorderTextContHeader style={{background: props.color}}>{props.title}</BorderTextContHeader>
            {props.data.map( el => {
                return <ItemBlockNotice color={props.color} />
            })}
        </BorderTextCont>
    );
};

export default ItemBlock;

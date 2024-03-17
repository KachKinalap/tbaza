import React from 'react';

const ItemBlockNotice = (props) => {

    return (
        <div className="hoverable hoverableImgItem" style={{backgroundColor: props.color?props.color:"white", borderRadius: 50, padding: "5px 10px", margin: "15px 10px", color: props.textColor?props.textColor:"black", transition: ".2s"}}>
            <span>{props.caption}</span>
        </div>
    );
};

export default ItemBlockNotice;

import React from 'react';
import {BorderTextCont, BorderTextContHeader} from "../styled";

const PreviewInfo = (props) => {
    console.log(props.caption)
    return (
        <div style={{minWidth: 400, maxWidth:"50%"}}>
            <BorderTextCont className="hoverable hoverableItemPreview" style={{marginTop: 40, transition: ".2s"}}>
                <BorderTextContHeader>Стоимость</BorderTextContHeader>
                <h4 style={{marginTop: 10}}>{props.data.cost + " руб."}</h4>
                <span style={{marginBottom: 10, padding: "0 20px"}}>{"*" + props.data.notice}</span>
            </BorderTextCont>

            {props.caption !== ""
                ?
                <BorderTextCont className="hoverable hoverableItemPreview" style={{marginTop: 40, transition: ".2s"}}>
                    <BorderTextContHeader>Описание</BorderTextContHeader>
                    <span style={{display: "inline-block", width: 400, padding:20}}>{props.caption}</span>
                </BorderTextCont>
                :
                <></>
            }

            {props.data.addition.length
                ?
                <BorderTextCont className="hoverable hoverableItemPreview" style={{marginTop: 40, transition: ".2s"}}>
                    <BorderTextContHeader>Дополнительно</BorderTextContHeader>
                    {props.data.addition.map(el => {
                        return <div style={{padding: 20}}>
                            <span >{el.cost + " руб. — " + el.title}</span>
                        </div>
                    })}
                </BorderTextCont>
                :
                <></>
            }

        </div>
    );
};

export default PreviewInfo;

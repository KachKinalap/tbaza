import React from 'react';
import {BorderTextCont, BorderTextContHeader} from "../../../styled";
import ItemBlockNotice from "../../../UI/ItemBlockNotice";
import { COLOURS } from "../../../styled";

const LivingComp = (props) => {
    return (
        Object.keys(props.data).length !== 0
         ?
             <div>
                    <p style={{fontSize: 20, padding: "40px 0", textAlign: "left"}}>{props.data.describing.main?props.data.describing.main:""}</p>
                    {props.data.describing.topics.map(el => {
                        return <BorderTextCont style={{marginTop: 60, display: "flex", justifyContent: "space-around"}}>
                            <BorderTextContHeader>{el.title}</BorderTextContHeader>
                            {typeof el.options[0] === 'object'
                                ?
                                el.options.map(innerEl => {
                                    return <BorderTextCont style={{width: "40%", margin: "40px 0"}}>
                                        <BorderTextContHeader>{innerEl.title}</BorderTextContHeader>
                                        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                                            {innerEl.options.map(lastLvlEl => {
                                                return <ItemBlockNotice color={COLOURS.BLUE} caption={lastLvlEl} textColor="white"/>
                                            })}
                                        </div>
                                    </BorderTextCont>
                                })
                                :
                                <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                                    {el.options.map(innerEl => {
                                        return <ItemBlockNotice color={COLOURS.BLUE} caption={innerEl}
                                                                textColor="white"/>
                                    })}
                                </div>
                            }
                        </BorderTextCont>

                    })}
                </div>
         :
             <></>

    );
};

export default LivingComp;

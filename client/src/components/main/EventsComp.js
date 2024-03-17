import React from 'react';
import ItemsSliderComp from "../sliders/itemsSlider/ItemsSliderComp";
import {BorderTextCont, BorderTextContHeader} from "../../styled";

const EventsComp = (props) => {

    const eventsByCount = props.max?props.data.events:props.data.events.slice(0, props.max)

    return (
        <div style={{marginTop: 200, marginBottom: 100}}>
            {eventsByCount !== []
             ?
                eventsByCount.map(el => {
                    return <BorderTextCont>
                                <BorderTextContHeader>{el.preview.title}</BorderTextContHeader>
                                <div style={{display: "flex"}}>
                                    <div style={{width:"50%", display: "flex", justifyContent: "space-between"}}>
                                        <ItemsSliderComp paths={el.details.gallery}/>
                                        <span style={{fontSize: 30, alignSelf: "center", margin: "auto"}}>{el.preview.date}</span>
                                    </div>
                                    <div style={{width: "50%", display: "flex"}}>
                                        <p style={{fontSize: 13, padding: 10, display: "inline-block", textAlign:"left", alignSelf: "center"}}>{el.details.text}</p>
                                    </div>
                                </div>
                           </BorderTextCont>
                })
             :
                <></>

            }
        </div>
    );
};

export default EventsComp;

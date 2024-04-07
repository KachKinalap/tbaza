import React from 'react';
import ItemsSliderComp from "../sliders/itemsSlider/ItemsSliderComp";
import {BorderTextCont, BorderTextContHeader} from "../../styled";
import MediaQuery from "react-responsive";

const EventsComp = (props) => {

    const eventsByCount = props.max?props.data.events:props.data.events.slice(0, props.max)

    return (
        <div style={{marginTop: 200, marginBottom: 100}}>
            {eventsByCount !== []
             ?
                eventsByCount.map(el => {
                    return <BorderTextCont>
                                <BorderTextContHeader>{el.preview.title}</BorderTextContHeader>
                                <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                                    <div style={{width: "50%"}}>
                                        <ItemsSliderComp paths={el.details.gallery}/>
                                    </div>
                                    <div style={{width: "50%"}}>
                                        <div style={{fontSize: 30}}>{el.preview.date}</div>
                                        <MediaQuery minWidth={1360}>
                                            <div style={{fontSize: 16, padding: 10, display: "inline-block", textAlign:"left"}}>{el.details.text}</div>
                                        </MediaQuery>
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

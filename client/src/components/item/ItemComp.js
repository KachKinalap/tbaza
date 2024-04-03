import React from 'react';
import { ItemHeader, ScreenDiv } from "../../styled";
import LivingComp from "./types/LivingComp";
import ItemsSliderComp from "../sliders/itemsSlider/ItemsSliderComp";
import PreviewInfo from "../../UI/PreviewInfo";
import { BOOKING_TYPES } from "../../utils/const";
import MyButton from "../../UI/MyButton";

const ItemComp = (props) => {

    return (
        <ScreenDiv style={{marginTop: 100}}>

            <ItemHeader>
                {props.data.preview.title}
            </ItemHeader>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "start", width: "100%", flexWrap: "wrap"}}>
                {Object.keys(props.data.details).length !== 0 && Object.keys(props.data.details.describing.gallery).length !== 0
                ?
                    <ItemsSliderComp paths={props.data.details.describing.gallery}/>
                :
                    <></>
                }
                <PreviewInfo data={props.data.preview} caption={props.data.details.caption? props.data.details.caption : ""}/>
            </div>
            {BOOKING_TYPES.includes(props.data.type)
                ?
                    <MyButton text="Забронировать"/>
                :
                    <></>
            }
                <LivingComp data={props.data.details}/>
        </ScreenDiv>
    );
};

export default ItemComp;

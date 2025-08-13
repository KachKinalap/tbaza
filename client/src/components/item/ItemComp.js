import React from 'react';
import { ItemHeader, ScreenDiv } from "../../styled";
import LivingComp from "./types/LivingComp";
import ItemsSliderComp from "../sliders/itemsSlider/ItemsSliderComp";
import PreviewInfo from "../../UI/PreviewInfo";

const ItemComp = (props) => {

    return (
        <ScreenDiv style={{marginTop: 100}}>

            <ItemHeader>
                {props.data.preview.title}
            </ItemHeader>
            <div style={{margin: "0 auto"}}>
                
                {Object.keys(props.data.details).length !== 0 &&
                props.data.details.describing !== undefined &&
                props.data.details.describing.gallery !== undefined
                ?
                <div style={{margin:"0 auto"}}>
                {/* <div style={{minHeight: 0, minWidth: 0, padding: 20}}> */}
                    <ItemsSliderComp paths={props.data.details.describing.gallery}/>
                </div>
                
                :
                    <></>
                }
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", flexGrow: 1}}>
                    <PreviewInfo data={props.data.preview} caption={props.data.details.caption? props.data.details.caption : ""}/>

                </div>
            </div>
                {props.data.details.describing !== undefined
                    ?
                        <LivingComp data={props.data.details}/>
                    :
                        <></>
                }

        </ScreenDiv>
    );
};

export default ItemComp;

import React from 'react';
import MainItemsSliderComp from "../sliders/itemsSlider/MainItemsSliderComp";
import {BorderTextCont, BorderTextContHeader, HorFlexDiv} from "../../styled";
import IconsBlock from "./IconsBlock";


const CapabilitiesComp = (props) => {
    return (
        <div style={{marginBottom:100}}>
        <HorFlexDiv>
            <MainItemsSliderComp title={props.data[0].living.title} items={props.data[0].living.items}/>
            <MainItemsSliderComp title={props.data[0].services.title} items={props.data[0].services.items}/>
            <MainItemsSliderComp title={props.data[0].additional.title} items={props.data[0].additional.items}/>
        </HorFlexDiv>
        <BorderTextCont>
            <BorderTextContHeader>Инфраструктура</BorderTextContHeader>
            <IconsBlock data={props.icons}/>
        </BorderTextCont>
        </div>
    );
};

export default CapabilitiesComp;

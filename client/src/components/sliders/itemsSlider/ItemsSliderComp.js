import React, { useEffect, useState } from 'react';
import Carousel from "nuka-carousel"
import { getPic } from "../../../http"
import { ItemSliderCont } from "../../../styled";

const ItemsSliderComp = (props) => {

    const [data, setData] = useState([])

    const fillData = (element) => {
        getPic(element).then((res)=>{
            setData(prevState => ([...prevState, res]))
        })
    };

    useEffect(()=>{
        props.paths.forEach((el)=>{
            fillData(el)
        })
    },[])

    return (
        <ItemSliderCont>
            <Carousel wrapAround={true} vertical={true} autoplay={true}>
                {
                    data !== []
                        ?
                        data.map( el => {
                            return <img src={el} alt="" width="100%"/>
                        })
                        :
                        <></>
                }
            </Carousel>
        </ItemSliderCont>
    );
};

export default ItemsSliderComp;

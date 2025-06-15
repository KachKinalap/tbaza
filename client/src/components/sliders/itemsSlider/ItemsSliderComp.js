import React, { useEffect, useState } from 'react';
import { Carousel } from "nuka-carousel"
import { getPic } from "../../../http"
import { ItemSliderCont } from "../../../styled";

const ItemsSliderComp = (props) => {

    const [data, setData] = useState([])
    const [mediaState, setMediaState] = useState(false)
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

    const handler = () => {
            const newState = !mediaState
            setMediaState(!mediaState)
        }
    window.matchMedia("(min-width: 1500px)").addEventListener("change", handler)

    return (
        <ItemSliderCont>
            <Carousel scrollDistance="slide" showArrows={true} autoplay={true} autoplayInterval={3000} className='border'>
                {   
                    data !== []
                        ?
                        data.map( el => {
                            return !mediaState ? 
                            <img src={el} alt="" width="auto" height={600}/> 
                            : 
                            <img src={el} alt="" width="auto" height={300}/> 
                            //<img src={el} alt=""/>
                        })
                        :
                        <></>
                }
            </Carousel>
        </ItemSliderCont>
    );
};

export default ItemsSliderComp;

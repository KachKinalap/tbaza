import React, { useEffect, useState } from 'react';
import { Carousel } from "nuka-carousel"
import { getPic } from "../../../http"
import { COLOURS, HorSliderItemCont, MainItemSliderCont, HorSliderItemContHeader } from "../../../styled";
import { useNavigate } from "react-router";

const MainItemsSliderComp = (props) => {

    const [data, setData] = useState([])
    console.log(data)
    const fillData = (element) => {
        getPic(element.img).then((res)=>{
            setData(prevState => ([
                ...prevState,
                {title: element.title?element.title:"", img: res, type: element.type}])
            )
        })
    };

    const navigation = useNavigate()

    useEffect(()=>{
        props.items.forEach((el)=>{
            fillData(el)
        })
    },[])

    return (
        <HorSliderItemCont>
            <HorSliderItemContHeader>{props.title}</HorSliderItemContHeader>
            <MainItemSliderCont>
                <Carousel showArrows={true} autoplay={true} autoplayInterval={3000}>
                    {
                        data !== []
                            ?
                            data.map( el => {
                                return <div className="hoverable divMainSlider" onClick={()=> navigation("/price/" + el.type)}>
                                            <img src={el.img} alt="" width="100%" height="100%"/>
                                                <h2 style={{
                                                position: "absolute",
                                                top: 20,
                                                paddingLeft: 20,
                                                textShadow: `1px 1px 2px black, 0 0 1em ${COLOURS.BLUE}, 0 0 0.2em ${COLOURS.BEJ}`,
                                                color: COLOURS.BEJ,
                                                fontSize: 20
                                            }}>{el.title?el.title:""}</h2>
                                </div>
                            })
                            :
                            <></>
                    }
                </Carousel>
            </MainItemSliderCont>
        </HorSliderItemCont>
    );
};

export default MainItemsSliderComp;

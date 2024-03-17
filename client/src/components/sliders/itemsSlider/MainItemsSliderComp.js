import React, { useEffect, useState } from 'react';
import Carousel from "nuka-carousel"
import { getPic } from "../../../http"
import { COLOURS, HorSliderItemCont } from "../../../styled";
import { useNavigate } from "react-router";

const MainItemsSliderComp = (props) => {

    const [data, setData] = useState([])

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
            <h4 style={{float: "left", marginBottom: 20, marginTop: 30, color: COLOURS.BLUE}}>{props.title}</h4>
            <Carousel wrapAround={true} vertical={true} autoplay={true}>
                {
                    data !== []
                        ?
                        data.map( el => {
                            return <div className="hoverable" onClick={()=> navigation("/price/" + el.type)} style={{
                                boxShadow: `10px ${COLOURS.BLUE}`,
                                borderRadius: 10,
                                overflow: "hidden",
                                height: "40vh",
                                maxHeight: 500,
                                minHeight: 250
                            }}>
                                <img src={el.img} alt="" style={{height: "100%", zIndex: -3}}/>
                                <h2 style={{
                                    position: "absolute",
                                    top: 20,
                                    paddingLeft: 20,
                                    textShadow: `1px 1px 2px black, 0 0 1em ${COLOURS.BLUE}, 0 0 0.2em ${COLOURS.BEJ}`,
                                    color: COLOURS.BEJ,
                                    fontSize: 20
                                }}>{el.title?el.title:""}</h2>
                            </div>
                            // <img src={el.img} alt="img" width={100} height={100}/>

                        })
                        :
                        <></>
                }
            </Carousel>
        </HorSliderItemCont>
    );
};

export default MainItemsSliderComp;

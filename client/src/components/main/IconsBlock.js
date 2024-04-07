import React, { useEffect, useState } from 'react';
import { HorFlexDivCent } from "../../styled";
import { getPic } from "../../http";

const IconsBlock = (props) => {
    //TODO переделать иконки в SVG, а то чо как ебан черные иконки вставляешь мудила сделай белые
    const [data, setData] = useState([])

    const fillData = (element) => {
        getPic(element.img).then((res)=>{
            setData(prevState => ([
                ...prevState,
                {title: element.caption, img: res}])
            )
        })
    };

    useEffect(()=>{
        props.data.forEach((el)=>{
            fillData(el)
        })
    },[])

    return (
        <HorFlexDivCent>
            {data !== []
                ?
                data.map(el => {
                return <div style={{padding:'40px 2%'}}>
                    <img src={el.img} alt=""/>
                    <h4 style={{fontSize:14, marginTop: 20}}>{el.title}</h4>
                </div>
            })
                :
                <></>
            }
        </HorFlexDivCent>
    );
};

export default IconsBlock;

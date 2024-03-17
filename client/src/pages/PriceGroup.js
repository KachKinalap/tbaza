import React, {useEffect, useState} from 'react';
import { getPriceGroup } from "../http";
import {HorFlexDivPrice, ScreenDiv} from "../styled";
import ItemCategory from "../components/price/category/ItemCategory";


const PriceGroup = () => {

    const [priceGroupInfo, setPriceGroupInfo] = useState([])
    const currentURL = window.location.href;

    const fetchPriceGroup = () => {
        getPriceGroup(currentURL.split("/").slice(-1)).then(res => {
            setPriceGroupInfo(res)
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect( ()=>{
        fetchPriceGroup()
    }, [])

    return (
        priceGroupInfo.length !== 0
            ?
            <div style={{marginTop: 100}}>
                <ScreenDiv>
                    <HorFlexDivPrice>
                        {priceGroupInfo.map( el => {
                            return <ItemCategory data = {el}/>
                        })}
                    </HorFlexDivPrice>
                </ScreenDiv>
            </div>
            :
            <></>
    );
};

export default PriceGroup;

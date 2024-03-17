import React, {useEffect, useState} from 'react';
import { getPrice } from "../http";
import GroupPreview from "../components/price/preview/GroupPreview";
import { ScreenDiv } from "../styled";

const Price = () => {

    const [pricePreviewInfo, setPricePreviewInfo] = useState({})

    const fetchPricePreview = () => {
        getPrice().then(res => {
            setPricePreviewInfo(res[0].preview[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect( ()=>{
        fetchPricePreview()
    }, [])


    return (

            Object.keys(pricePreviewInfo).length !== 0
                ?
                <ScreenDiv>
                    <GroupPreview data={pricePreviewInfo.living}/>
                    <GroupPreview data={pricePreviewInfo.services}/>
                    <GroupPreview data={pricePreviewInfo.additional}/>
                </ScreenDiv>
                :
                <div style={{marginTop: "20%", fontSize: 24}}>
                    Приносим свои извинения, варианты для выбора украла тайная полиция и сейчас творит с ними
                    всякие беззакония. Будьте бдительны и не позволяйте ей такого на своих сайтах!
                </div>
    );
};

export default Price;

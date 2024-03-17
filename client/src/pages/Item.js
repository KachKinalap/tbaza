import React, { useEffect, useState } from 'react';
import { getPriceItem } from "../http";
import ItemComp from "../components/item/ItemComp";

const Item = () => {

    const [itemInfo, setItemInfo] = useState({})
    const currentURL = window.location.href;

    const fetchPriceItem = () => {
        getPriceItem(currentURL.split("/").slice(-1)).then(res => {
            setItemInfo(res[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect( ()=>{
        fetchPriceItem()
    }, [])

    return (
        Object.keys(itemInfo).length !== 0
        ?
            <ItemComp data={itemInfo} />
        :
            <></>
    );
};

export default Item;

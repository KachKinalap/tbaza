import React, {useEffect, useState} from 'react';
import {COLOURS} from "../../../styled";
import {useNavigate} from "react-router";
import {getPic} from "../../../http";

const ItemCategory = (props) => {
    const [photo, setPhoto] = useState("")
    //TODO hover-effect on items
    //TODO поменять формат добавления в готовый массив, используя spreading, сейчас лень думать над этим
    const fillPhoto = (url) => {
        getPic(url).then((res)=>{
            setPhoto(res)
        })
    };

    useEffect(()=>{
        if(props.data.preview){
            fillPhoto(props.data.preview.img)
        }
    },[])

    const navigation = useNavigate()

    return (
        <div className="hoverable hoverableImgItem" onClick={()=> navigation("/item/" + props.data.id)} style={{
            margin: "2%",
            minWidth: 266,
            backgroundImage: `url(${photo})`,
            backgroundSize: '100% 100%',
            height: 200,
            borderRadius: 10,
            padding: 30,
            textAlign: "left",
            boxShadow: `10px ${COLOURS.BLUE}`,
            transition: '.2s'
        }}>
            <h2 style={{
                textShadow: `1px 1px 2px black, 0 0 1em ${COLOURS.BLUE}, 0 0 0.2em ${COLOURS.BEJ}`,
                display: "block",
                maxWidth: 200,
                color: COLOURS.BEJ,
                fontSize: 20
            }}>{props.data.preview.title.split("(")[0]}</h2>
        </div>

    );
};

export default ItemCategory;

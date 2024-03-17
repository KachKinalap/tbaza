import React, { useEffect, useState } from 'react';
import { BorderTextCont, BorderTextContHeader, COLOURS, HorFlexDivPrice } from "../../../styled";
import { getPic } from "../../../http";
import { useNavigate } from "react-router";

const GroupPreview = (props) => {

    const [data, setData] = useState([])
    //TODO hover-effect on items
    //TODO поменять формат добавления в готовый массив, используя spreading, сейчас лень думать над этим
    const fillData = (element) => {
        getPic(element.img).then((res)=>{
            setData(prevState => ([
                ...prevState,
                {title: element.title, type: element.type, img: res}])
            )
        })
    };

    useEffect(()=>{
        props.data.items.forEach((el)=>{
            fillData(el)
        })
    },[])

    const navigation = useNavigate()

    return (
        data
        ?
            //TODO можно потом сделать названия в превью более короткими, типа "кафе", а на страничке группы расписать
            // его более подробно, чтобы она не становилась бесполезной для категорий, где только 1 элемент

            <BorderTextCont style={{marginTop: 100}}>
                <BorderTextContHeader>{props.data.title}</BorderTextContHeader>
                <HorFlexDivPrice>
                    {data.map( el => {
                        return <div className="hoverable hoverableImgItem" onClick={()=> navigation("/price/" + el.type)} style={{
                            minWidth: 266,
                            margin: "2%",
                            backgroundImage: `url(${el.img})`,
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
                                display: "inline",
                                color: COLOURS.BEJ,
                                fontSize: 20
                            }}>{el.title}</h2>
                        </div>
                    })}
                </HorFlexDivPrice>
            </BorderTextCont>
        :
            // TODO сделать загрузчик, а то негоже
        <></>
    );
};

export default GroupPreview;

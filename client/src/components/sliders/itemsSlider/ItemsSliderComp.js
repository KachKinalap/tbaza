import React, { useEffect, useState } from 'react';
// import { Carousel } from "nuka-carousel"
import { getPic } from "../../../http"
import { ItemSliderCont } from "../../../styled";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ItemsSliderComp = (props) => {

    const [data, setData] = useState([])
    const [mediaState, setMediaState] = useState(false)
    const fillData = (element) => {
        getPic(element).then((res)=>{
            setData(prevState => ([...prevState, {original:res, thumbnail:res}]))
        })
    };

    useEffect(()=>{
        props.paths.forEach((el)=>{
            fillData(el)
        })
        
    },[])


    


    return (
        <ImageGallery original items={data} />
        // <Slider className="border_test" {...settings}>
        //     {   
        //         data !== []
        //             ?
        //             data.map( (el, ind) => {
        //                 return <div><img src={el} key={ind} alt=""/></div>
        //             })
        //             :
        //             <></>
        //     }
        // </Slider>
        // <ItemSliderCont>
        //     <Carousel scrollDistance="slide" showArrows={true} autoplay={true} autoplayInterval={3000} className='border'>
        //         {   
        //             data !== []
        //                 ?
        //                 data.map( el => {
        //                     return !mediaState ? 
        //                     <img src={el} alt="" width="auto" height={600}/> 
        //                     : 
        //                     <img src={el} alt="" width="auto" height={300}/> 
        //                     //<img src={el} alt=""/>
        //                 })
        //                 :
        //                 <></>
        //         }
        //     </Carousel>
        // </ItemSliderCont>
    );
};

export default ItemsSliderComp;

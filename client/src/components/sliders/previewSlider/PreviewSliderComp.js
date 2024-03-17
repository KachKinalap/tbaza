import React, {useEffect, useRef, useState} from "react"
import useSlider from "../../../hooks/useSlider"
import {getPic} from "../../../http";

const PreviewSliderComp = (props) => {

    const [images, setImages] = useState([])

    const fillImage = (element) => {
        getPic(element.src).then((res)=>{
            setImages(prevState => ([
                ...prevState,
                {src: res, text: element.text}])
            )
        })
    };

    useEffect(()=>{
        props.data.forEach((el)=>{
            fillImage(el)
        })
    },[])


    const slideImage = useRef(null)
    const slideText = useRef(null)
    const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)


    return (

        <div className="slider" ref={slideImage}>
            <div className="slider--content">
                <button onClick={goToPreviousSlide} className="slider__btn-left">
                    <i className="fas fa-angle-left"></i>
                </button>
                <div className="slider--feature">
                    <h1 className="feature--title">Белая гора</h1>
                    <p ref={slideText} className="feature--text"></p>
                    {/*<button className="feature__btn">Get started</button>*/}
                </div>
                <button onClick={goToNextSlide} className="slider__btn-right">
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default PreviewSliderComp

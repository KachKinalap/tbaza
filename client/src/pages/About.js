import React, { useEffect, useState } from 'react';
import ItemsSliderComp from "../components/sliders/itemsSlider/ItemsSliderComp";
import { getAbout } from "../http";
import AboutComp from "../components/AboutComp";

const About = () => {

    const [about, setAbout] = useState()

    const fetchEvents = () => {
        getAbout().then(res => {
            console.log(res[0])
            setAbout(res[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div>
            {about
             ?
                <AboutComp paths={about.gallery}/>
             :
                <></>
            }

        </div>
    );
};

export default About;

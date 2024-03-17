import React, { useEffect, useState } from 'react';
import PreviewSliderComp from "../components/sliders/previewSlider/PreviewSliderComp";
import {getEvents, getMain} from "../http";
import CapabilitiesComp from "../components/main/CapabilitiesComp";
import {PageDiv, ScreenDiv} from "../styled";
import ScreenSeparator from "../components/ScreenSeparator";
import Videotour from "../UI/Videotour";
import EventsComp from "../components/main/EventsComp";

const Main = () => {
    const [mainInfo, setMainInfo] = useState()
    const [events, setEvents] = useState()

    //fetching main json to represent page(without imgs)
    const fetchMain = () => {
        getMain().then(res => {
            console.log(res[0])
            setMainInfo(res[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    const fetchEventsPreview = () => {
        getEvents().then(res => {
            console.log(res[0])
            setEvents(res[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect( ()=>{
        fetchMain()
        fetchEventsPreview()
    }, [])

    return (
        <div>
            {mainInfo
                ?
                <PageDiv>
                    {/*Slider preview*/}

                    <PreviewSliderComp data={mainInfo.slider}/>
                    {/*Slider preview - end*/}
                    <ScreenSeparator title={"К вашим услугам:"}/>
                    {/*Sliders capabilities*/}
                    <ScreenDiv>
                        <CapabilitiesComp data={mainInfo.preview} icons={mainInfo.icons}/>
                    </ScreenDiv>
                    {/*Sliders capabilities - end*/}
                    <ScreenSeparator title={"Видеотур"}/>
                    <ScreenDiv>
                        <Videotour/>
                    </ScreenDiv>
                    <ScreenSeparator title={"Мероприятия"}/>
                    {events
                     ?
                        <ScreenDiv>
                            <EventsComp max={3} data={events}/>
                        </ScreenDiv>
                     :
                        <></>
                    }
                </PageDiv>
                 :
                 <div>Идёт загрузка...</div>
            }
        </div>
    );
};

export default Main;

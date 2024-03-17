import React, {useEffect, useState} from 'react';
import EventsComp from "../components/main/EventsComp";
import {getEvents} from "../http";
import {ScreenDiv} from "../styled";

const Events = () => {

    const [events, setEvents] = useState()

    const fetchEvents = () => {
        getEvents().then(res => {
            console.log(res[0])
            setEvents(res[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div>
            {events
             ?
                <ScreenDiv>
                    <EventsComp data={events}/>
                </ScreenDiv>
             :
                <></>
            }
        </div>
    );
};

export default Events;

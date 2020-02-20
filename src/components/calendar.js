import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { loremIpsum } from "lorem-ipsum";
import Nav from './nav'
import Footer from './footer'

const localizer = momentLocalizer(moment)

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const myEventsList = [];

for (let i = 0; i < 365; ++i) {
    const num = getRndInteger(0,30)
    const newDate = new Date(moment().add(num, "days"))
    myEventsList.push(
        {
            start: newDate,
            end: newDate,
            title: `Acct: ${i+99999} Address: ${
                loremIpsum({
                    count: 3,
                    units: "words"
                })
            }`,
            allDay: true
        }
    )
}

const Component = () => {
    return (
        <>
            <Nav />
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                style={{ height: "80vh" }}
            />
            <Footer />
        </>
    );
};

export default Component;
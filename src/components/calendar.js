import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Nav from './nav'
import PageTitles from './page-titles'
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
            title: `Acct: ${num+99999}`,
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
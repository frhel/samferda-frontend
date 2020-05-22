import React from 'react';

const RideListItem = ({ link, from, to, date, time }) => {
    return (
        <div class="item">
            <a href={link} target="_blank">More Information</a>
            <div class="loc">From: {from}</div>
            <div class="loc">To: {to}</div>
            <div class="date">{date}</div>
            <div class="time">{time}</div>
        </div>
    )
}

export default RideListItem;
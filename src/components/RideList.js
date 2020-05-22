import React from 'react';
import RideListItem from './RideListItem'



function RideList({ list, listType }) {
    const out = list.map((item, i) => {
        return (
            <RideListItem
                key={i}
                link={list[i].link}
                from={list[i].from}
                to={list[i].to}
                date={list[i].date}
                time={list[i].time}
            />
        )
    })
    const heading = listType === 'drivers' ? 'Drivers looking for passengers' : 'Passengers looking for drivers';
    return (
        <div className="ride-list-wrapper bt mt5 flex flex-column w-100 justify-center items-center" >
            <h3>{heading}:</h3>
            {out}
        </div>
    )
}

export default RideList;
import React, { useState } from 'react';

function DateTime() {

    const [newTime, changeTime] = useState('TIME');
    var date = new Date();
    var day = date.getDate(0);
    var month = date.getMonth();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year = date.getFullYear();
    function getTime() {
        let time = new Date().toLocaleTimeString();
        changeTime(time);
    }
    setInterval(getTime,1000);

    const dateStyle = {
        color: 'white',
        textAlign: 'center',
        fontSize: '3.2rem',
        marginTop: '5.5%'
    }

    return (
        <h1 style={dateStyle}>{day}-{months[month-1]}-{year}-{newTime}</h1>
    )

}

export default DateTime;
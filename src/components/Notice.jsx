import React from 'react';

function Notice() {

    const divStyle = {
        height: '75%',
        width: '93%',
        margin: '0 auto',
        backgroundColor: 'rgba(246, 93, 78, 1)',
        borderRadius: '28px'
    }
    return (
        <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <div style={divStyle}>
                <img src='coronaRed.png' height='30%' width='50%'/>
            </div>
        </div>
    )
}

export default Notice;


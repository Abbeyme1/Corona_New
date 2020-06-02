import React from 'react';
import './flip.css';

function Footer(){

    const divStyle=
    {backgroundColor:'rgba(148, 148, 148, 1)',
    height:'65%',
    width:'25%',
    margin:'0 auto',
    borderRadius: '30px',
};

const con = {display:'flex',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'};
const info = {fontSize:'5.5rem',marginLeft:'4%'};
    return (
        <div style={con}>
            <div className='mainContainer'>
                <div className='theCard'>
                    <div className='theFront'><img src='does.png' height='100%' width='100%'/></div>
                    <div className='theBack' style={{backgroundColor:'green'}}>
                        <ul style={info}>
                            <li>Physical Distancing</li>
                            <li>Maintain Personal Hygiene</li>
                            <li>Maintain a safe distance</li>
                            <li>Wear a mask</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mainContainer'>
                <div className='theCard'>
                    <div className='theFront'><img src='dont.png' height='100%' width='100%'/></div>
                    <div className='theBack'>
                        <ul style={info}>
                            <li>Shake Hands</li>
                            <li>Spit in Public</li>
                            <li>Travel unnecessarily</li>
                            <li>touch your eyes,nose and mouth</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mainContainer'>
                <div className='theCard'>
                    <div className='theFront'><img src='warning.png' height='100%' width='100%'/></div>
                    <div className='theBack' style={{backgroundColor:'yellow'}}>DEF</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

// //////////////////////////////////////////


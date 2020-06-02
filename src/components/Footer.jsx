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

    return (
        <div style={con}>
            <div className='mainContainer'>
                <div className='theCard'>
                    <div className='theFront'><img src='does.png' height='100%' width='100%'/></div>
                    <div className='theBack'>DEF</div>
                </div>
            </div>

            <div className='mainContainer'>
                <div className='theCard'>
                    <div className='theFront'><img src='2.png' height='100%' width='100%'/></div>
                    <div className='theBack'>DEF</div>
                </div>
            </div>

            <div className='mainContainer'>
                <div className='theCard'>
                    <div className='theFront'><img src='3.png' height='100%' width='100%'/></div>
                    <div className='theBack'>DEF</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

// //////////////////////////////////////////


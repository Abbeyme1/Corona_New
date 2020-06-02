import React from 'react';
import './flip.css';

function Notice() {

    const divStyle = {
        height: '75%',
        width: '93%',
        borderRadius: '28px',
        
    }

    return (
        <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <div className='bg' style={divStyle}>
                <a href='https://covid19responsefund.org/en/'><button style={{height:'3vh', width:'7vw', backgroundColor:'yellow',border:'none',fontSize:'3.5rem',borderRadius:'28px',color:'blue',margin:'25% 0 0 45%'}} >Please Donate</button></a>
            </div>
        </div>
    )
}

export default Notice;


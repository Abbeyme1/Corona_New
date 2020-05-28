import React from 'react';
import DateTime from './DateTime';
import Cases from './Cases';


function sideNav() {

    const divDesign = {height: '100vh',width: '20%',padding:'0',margin:'0',backgroundColor:'rgba(9, 13, 22, 1)',left: '0',right:'0',top:'0',bottom:'0'};
    const headingDesign = {
        color: 'white',
        textAlign: 'center',
        top: '20%',
        fontSize:'7.0rem',
        fontWeight: '800',
        fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
    }

    
    return (
        <div style={divDesign}>
            <DateTime />
            <h1 style={headingDesign}>World <span style={{color: 'yellow'}}>Wide</span></h1>
            <Cases />
        </div>
    );
}

export default sideNav;
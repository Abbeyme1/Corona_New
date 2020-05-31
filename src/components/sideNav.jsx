import React from 'react';
import DateTime from './DateTime';



function sideNav() {

    const divDesign = {height: '100vh',width: '6vw',padding:'0',margin:'0',backgroundColor:'rgba(9, 13, 22, 1)',left: '0',right:'0',top:'0',bottom:'0'};
    
    return (
        <div style={divDesign}>
            <DateTime />
            
        </div>
    );
}

export default sideNav;
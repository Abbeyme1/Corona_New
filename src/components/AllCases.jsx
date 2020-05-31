import React from 'react';

function AllCases(){

    const divStyle=
    {backgroundColor:'white',
    height:'60%',
    width:'18%',
    margin:'0 auto',
    borderRadius: '60px',
    // borderTopLeftRadius:'10%',
    // borderBottomLeftRadius:'10%',
    // borderTopRightRadius:'10%',
    // borderBottomRightRadius:'15%'
};

const headingStyle = {
    fontSize: '3.2rem',
    fontFamily:'sans-serif',
    marginLeft: '5%'
    
}

    

    return (
        <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <div style={divStyle}>
                <h2 style={headingStyle}>New Confirmed</h2>
            </div>

            <div style={divStyle}>
                <h2 style={headingStyle}>Total Confirmed</h2>
            </div>

            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'red'}}>Total Death</span></h2>
            </div>
            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'yellow'}}>Total Recovered</span></h2>
            </div>
            
        </div>
    )
}

export default AllCases;
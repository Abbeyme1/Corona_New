import React, { Component } from 'react';

class AllCases extends Component {

    constructor() {
        super();
        this.state = {NewConfirmed:'',TotalConfirmed:'',TotalDeath: '',TotalRecovered:''};
    }

    componentDidMount = () => {
        fetch('/api')
        .then(res => res.json())
        .then(cases => cases['Global'])
        .then(val => this.setState({NewConfirmed:val['NewConfirmed'],TotalConfirmed: val['TotalConfirmed'], TotalDeath:val['TotalDeaths'], TotalRecovered: val['TotalRecovered']}))
    }

render(){
    const divStyle=
    {backgroundColor:'white',
    height:'60%',
    width:'18%',
    margin:'0 auto',
    borderRadius: '60px',
};

const headingStyle = {
    fontSize: '3.2rem',
    fontFamily:'sans-serif',
    marginLeft: '5%'
    
}

const value = {
    marginTop:'0',
    fontSize: '7rem',
    marginLeft: '10%'
}
    return (
        <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <div style={divStyle}>
                <h2 style={headingStyle}>New Confirmed</h2>
                <p style={value}>{this.state.NewConfirmed}</p>
            </div>

            <div style={divStyle}>
                <h2 style={headingStyle}>Total Confirmed</h2>
                <p style={value}>{this.state.TotalConfirmed}</p>
            </div>

            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'red'}}>Total Death</span></h2>
                <p style={value}>{this.state.TotalDeath}</p>
            </div>
            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'yellow'}}>Total Recovered</span></h2>
                <p style={value}>{this.state.TotalRecovered}</p>
            </div>
            
        </div>
    )
}
}

export default AllCases;
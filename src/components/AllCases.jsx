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
    {
    // backgroundColor:'rgba(148, 148, 148, 1)',
    height:'50%',
    width:'15%',
    margin:'0 auto',
    borderRadius: '60px',
};

const headingStyle = {
    fontSize: '3rem',
    fontFamily:'sans-serif',
    marginLeft: '25%',
    marginTop: '8%'
    
}

const value = {
    marginTop:'0',
    fontSize: '9rem',
    marginLeft: '18%',
    fontWeight: '500'
}
    return (
        <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'yellow'}}>New Confirmed</span></h2>
                <p style={value}><span style={{color:'yellow'}}>{this.state.NewConfirmed}</span></p>
            </div>

            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'blue'}}>Total Confirmed</span></h2>
                <p style={value}><span style={{color:'blue'}}>{this.state.TotalConfirmed}</span></p>
            </div>

            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'red'}}>Total Death</span></h2>
                <p style={value}><span style={{color:'red'}}>{this.state.TotalDeath}</span></p>
            </div>
            <div style={divStyle}>
                <h2 style={headingStyle}><span style={{color:'green'}}>Total Recovered</span></h2>
                <p style={value}><span style={{color:'green'}}>{this.state.TotalRecovered}</span></p>
            </div>
            
        </div>
    )
}
}

export default AllCases;


// rgba(246, 93, 78, 1)
// rgba(246, 230, 87, 1)
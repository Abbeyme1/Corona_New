import React, { Component } from 'react';

class CountryList extends Component {
    constructor(){
        super();
        this.state = { country: []};
    }

    componentDidMount = () => {
        fetch("/c")
        .then(res => res.json())
        .then(cases => this.setState({country: cases}))

    }

render() {


    const divStyle = {
                height: "100%", 
                overflowY: 'scroll',
                display: 'flex',
                flexDirection:'column',
                
    }
    

    const flagStyle = {

        marginBottom:'3.5%',
        backgroundColor:'rgba(36, 36, 36, 1)',
        fontSize: '7rem',
        borderRadius: '13px',
        color:'white'
    }
    const uflagStyle = {

        margin:'5%',
        backgroundColor:'rgba(36, 36, 36, 1)',
        fontSize: '4.5rem',
        borderRadius: '13px',
        color:'white'
    }

    const tdStyle = {
        width:'15%',
        paddingLeft:'8%',
        
    }

    const greentdStyle = {
        width:'15%',
        paddingLeft:'8%',
        color: 'green'
    }

    return(
        <div style={{height:'100%',width:'100%'}}>
        <div>
            <table >
                <tr style={uflagStyle}>
                    <td style={tdStyle}>Country</td>
                    <td style={tdStyle}>Today Cases</td>
                    <td style={tdStyle}>Today Deaths</td>
                </tr>
            </table>
        </div>
            <table style={divStyle}>{this.state.country.map((e) => 
                <tr style={flagStyle}>
                
                <td style={tdStyle}><img src={e.countryInfo.flag} style={{borderRadius:'500px'}} alt='a'/></td>
                <td style={{fontSize:'3.5rem',width:'10%',paddingLeft:'1.5%',}}>{e.countryInfo.iso3}</td>
                <td style={tdStyle}>{e.todayCases}</td>
                <td style={e.todayDeaths == 0 ? greentdStyle : tdStyle}>{e.todayDeaths}</td>
                
                </tr>

                
                
            )}</table>
            
        </div>
    )
}


}

export default CountryList;





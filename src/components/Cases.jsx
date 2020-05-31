import React, { Component } from 'react';

class Cases extends Component {

    constructor(){
        super();
        this.state = {TotalConfirmed:'',TotalDeath: '',TotalRecovered:''};
    }

    componentDidMount = ()=> {
        fetch("/api")
        .then(res => res.json())
        .then(cases => cases['Global'])
        .then(val => this.setState({TotalConfirmed: val['TotalConfirmed'], TotalDeath:val['TotalDeaths'], TotalRecovered: val['TotalRecovered']}))
    }

render() {
    const divStyle = {
        color: 'white',
        fontWeight: '100',
        display: 'grid',
        alignItem: 'center',
        alignContent: 'center',
        fontSize: '2.8rem',
        margin: '0 0'
    }
    
    return (
        <div style={divStyle}>
            <table>
                <tr>
                    <td>Total Confirmed</td>
                    <td>Total Death</td>
                    <td>Total Recovored</td>
                </tr>
                <tr style={{fontSize:'5.5rem'}}>
                    <td>{this.state.TotalConfirmed}</td>
                    <td style={{color:'rgb(255,0,100)'}}>{this.state.TotalDeath}</td>
                    <td style={{color:'rgb(0,225,130)'}}>{this.state.TotalRecovered}</td>
                </tr>
            </table>
        </div>
    )

}
}

export default Cases;
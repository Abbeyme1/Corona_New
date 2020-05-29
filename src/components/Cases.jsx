import React, { Component } from 'react';
import axios from 'axios';

class Cases extends Component {

    constructor(){
        super();
        this.state = {Cases: 0};
    }

    componentDidMount = ()=> {
        fetch("http://localhost:5000/getVal")
        .then(res => res.json())
        .then(cases => this.setState({cases},() => console.log(cases)));
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
                    <td>25555</td>
                    <td style={{color:'rgb(255,0,100)'}}>{this.state.Cases}</td>
                    <td style={{color:'rgb(0,225,130)'}}>25555</td>
                </tr>
            </table>
        </div>
    )

}
}

export default Cases;
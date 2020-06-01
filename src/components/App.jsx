import React from 'react';
import Map from './Map';
import SideNav from './sideNav';
import AllCases from './AllCases';
import Footer from './Footer';
import CountryList from './CountryList';


function App() {
    return (
        <div style={{display: 'flex'}}>
            <div style={{height: '100vh',width:'6vw',backgroundColor:'red'}}>
                <SideNav />
            </div>
            <div style={{height: '100vh',width:'76vw',display:'flex',flexDirection:'column'}}>
                <div style={{height: '20vh',width:'100%'}}>
                    <AllCases />
                </div>
                <div style={{height: '55vh',width:'100%',backgroundColor:'black',borderRadius:'3%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{height:'85%',width:'85%', margin: '0 auto',display: 'flex',justifyContent:'center',alignItems:'center'}}>
                        <Map />
                    </div>
                </div>
                <div style={{height: '25vh',width:'100%'}}>
                    <Footer />
                </div>
            </div>
            <div style={{height: '100vh',width:'20vw'}}>
                <div style={{height: '75vh', width:'100%'}}><CountryList/></div>
                <div style={{height: '25vh', width:'100%',backgroundColor:'purple'}}></div>
            </div>
        </div>
  );
}
export default App;


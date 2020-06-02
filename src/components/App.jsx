import React from 'react';
import Map from './Map';
import SideNav from './sideNav';
import AllCases from './AllCases';
import Footer from './Footer';
import CountryList from './CountryList';
import Notice from './Notice';


function App() {
    return (
        <div style={{display: 'flex'}}>
            <div style={{height: '100vh',width:'6vw'}}>
                <SideNav />
            </div>
            <div style={{height: '100vh',width:'76vw',display:'flex',flexDirection:'column',backgroundColor:'rgba(36, 36, 36, 1)'}}>
                <div style={{height: '20vh',width:'100%'}}>
                    <AllCases />
                </div>
                <div style={{height: '55vh',width:'100%',backgroundColor:'rgba(36, 36, 36, 1)',borderRadius:'3%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{height:'96%',width:'93%', margin: '0 auto',display: 'flex',justifyContent:'center',alignItems:'center'}}>
                        <Map />
                    </div>
                </div>
                <div style={{height: '25vh',width:'100%'}}>
                    <Footer />
                </div>
            </div>
            <div style={{height: '100vh',width:'20vw'}}>
                <div style={{height: '75vh', width:'100%',backgroundColor:'rgba(36, 36, 36, 1)'}}><CountryList/></div>
                <div style={{height: '25vh', width:'100%',backgroundColor:'rgba(36, 36, 36, 1)'}}>
                    <Notice />
                </div>
            </div>
        </div>
  );
}
export default App;


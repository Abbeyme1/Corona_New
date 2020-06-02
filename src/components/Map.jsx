import React, { useState , useEffect} from 'react';
import ReactMapGL ,{Marker, Popup} from 'react-map-gl';
// import * as coronaMarker from './data.json';
import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(response => response.json());

function getMarker(cases)
{
    if(cases >= 8000)
    {
        var marker = "pink.svg";
        marker = marker.toString();
        return marker;
    }
    else if(cases >= 500)
    {
        marker ="yellow.svg";
        marker = marker.toString();
        return marker;
    }
    else{
        marker = "green.svg";
        marker = marker.toString();
        return marker;
    }
}

function Map() {
    const url = 'https://disease.sh/v2/countries';
    const markerStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    }
    const [viewport, setViewport] = useState({
        latitude: 30.46,
        longitude: 70.54,
        height: '100%',
        width: '100%',
        zoom: 4
    });
    const {data,error} = useSwr(url,fetcher);
    const infected = data && !error ? data : [];
    

    useEffect(() => {
        const listener = e => {
            if(e.key === 'Escape')
            {
                setSelectedMarker(null);
            }
        };
        window.addEventListener('keydown',listener);

        return () => {
            window.removeEventListener('keydown',listener);
        }
    } , [])

    const [selectedMarker,setSelectedMarker] = useState(null);
 
    return (
        
            <ReactMapGL {...viewport} 
            style={{float : 'right',margin:'0',padding:'0',left: '0',right:'0',top:'0',bottom:'0'}}
            maxZoom={20}
            mapStyle='mapbox://styles/abbeyme/ckalkqt1g3x5q1iqh3ixrgsus'
            onViewportChange = {(viewport) => { setViewport(viewport)}}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>

            {infected.map((mark) => (
                
                <Marker key={mark.countryInfo._id}
                latitude={mark.countryInfo.lat}
                longitude={mark.countryInfo.long}
                >
                    <button style={markerStyle}
                    onClick={e => {
                        e.preventDefault();
                        setSelectedMarker(mark);
                    }}
                    >
                        <img src={getMarker(mark.cases)} alt="sk" style={{width: (mark.cases)%70}}></img>
                    </button>
                </Marker>
            ))}

            {selectedMarker ? (
                <Popup
                onClose={() => {
                    setSelectedMarker(null)
                }}
                latitude={selectedMarker.countryInfo.lat}
                longitude={selectedMarker.countryInfo.long}>
                    <div>
                        <h2>{selectedMarker.country}</h2>
                        <p>Recovered : {selectedMarker.recovered}</p>
                        <p>Dead : {selectedMarker.deaths}</p>
                        <p>Active : {selectedMarker.active}</p>
                    </div>
                </Popup>
            ) : null}
            
            </ReactMapGL>   
  );
}

export default Map;


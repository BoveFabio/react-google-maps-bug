import {GoogleMap, Polygon, useJsApiLoader} from "@react-google-maps/api";
import {SelectionButton} from "./SelectionButton";
import {useEffect, useState} from "react";

function App() {
    const {isLoaded, loadError} = useJsApiLoader({googleMapsApiKey: "google maps api key"});
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        if (!isLoaded || mapReady) {
            return;
        }

        setTimeout(() => {
            setMapReady(true)
        }, 1000);
    })

    const handleButtonClick = () => {
        console.log("button onClick")
    }

    const handlePolygonClick = () => {
        console.log("polygon onClick");
    }

    return (
        <div style={{width: 300, height: 300}}>
            {!isLoaded && <p>Loading ...</p>}
            {isLoaded &&
                <div style={{width: 300, height: 300, backgroundColor: "blue"}}>
                    <GoogleMap mapContainerStyle={{width: 500, height: 500, backgroundColor: "blue"}}
                               center={{lat: 50, lng: 10}} zoom={9}>
                        {mapReady && <Polygon
                            onClick={handlePolygonClick}
                            path={[
                                {lat: 49.9, lng: 9.9},
                                {lat: 50.1, lng: 9.9},
                                {lat: 50.1, lng: 10.1},
                                {lat: 49.9, lng: 10.1}
                            ]}
                            options={{
                                fillColor: "black",
                                fillOpacity: 0.2,
                                strokeColor: "black",
                                strokeOpacity: 1,
                                strokeWeight: 2,
                            }}/>}
                        {mapReady && <SelectionButton position={{lat: 50, lng: 10}} onClick={handleButtonClick}/>}
                    </GoogleMap>
                </div>
            }
            {loadError}
        </div>
    );
}

export default App;

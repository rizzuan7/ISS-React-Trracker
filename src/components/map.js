import GoogleMapReact from "google-map-react";
import ISS from './ISS.png'

function Map({center, zoom}) {
  return ( 
  <div className="map-container">
       <GoogleMapReact
            bootstrapURLKeys={{
                key: #GetYourKey,
            }}
            defaultCenter={center}
            defaultZoom={zoom}
       >
           <img src={ISS} 
                alt='ISS icon' 
                className='iss-icon'
                lat={center.lat}
                lng={center.lng}
           />
       </GoogleMapReact> 
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 3.1390,
        lng: 101.6869,
      },
      zoom: 11

}

export default Map;
import './Location.css';
import Map from './components/map'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Location() {
  const [loading, SetLoading] = useState(false)
  const [longitude, setLongitude] = useState(101.6869)
  const [latitude, setLatitude] = useState(3.1390)


  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    SetLoading(true)
    const res = await axios.get('http://api.open-notify.org/iss-now.json')
    const { longitude, latitude } = await res.data.iss_position

    setLongitude(parseFloat(longitude))
    setLatitude(parseFloat(latitude))
    SetLoading(false)
  }
  
  return (
    <><h1 class='head'>The Live Location Of Internation Space Station</h1>
    <div className="Location">
      {!loading ? (
        <Map center={{ lat: latitude, lng: longitude }} zoom={6} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
    <footer>
      <b>Developed by Mohammad Syek Rizzuan</b>
   </footer>
    </>
  )
}

export default Location;

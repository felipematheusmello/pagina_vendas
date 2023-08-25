import React, { useEffect, useState } from 'react';
import './counter-banner.css'

function CounterBanner() {
    const [randomNumber, setRandomNumber] = useState(100)
    const [location, setLocation] = useState()

    const generateRandomNumber = (max, min) => {
        setRandomNumber( randomNumber + Math.floor(Math.random() * (max - min) + min) )
    }

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        // Make API call to get location
        fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true'`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setLocation(data);
            console.log(data);
        })
        .catch(error => console.log(error));
      }

      const error = () => {
        console.log("Unable to retrieve your location");
      }

    const getLocationName = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
          } else {
            console.log("Geolocation not supported");
          }
    }

    // useEffect(() => {
    //     getLocationName()
    // }, [location])

    useEffect(() => {
        setTimeout(() => {
            generateRandomNumber(3, 0)
        }, 5000)
    }, [randomNumber])

    return (
        <div className="container">
            <div className="counter-title">Há {randomNumber} pessoas {location?.name ? location.name + ' de': ''} assistindo esse vídeo</div>
        </div>
    )
}

export default CounterBanner
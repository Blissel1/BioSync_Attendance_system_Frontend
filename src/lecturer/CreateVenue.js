import React, { useState } from 'react';
import axios from 'axios';
import './CreateVenue.css';

export default function Location() {
  const [locations, setLocations] = useState({
    button1: { lat: null, long: null, clicked: false },
    button2: { lat: null, long: null, clicked: false },
    button3: { lat: null, long: null, clicked: false },
    button4: { lat: null, long: null, clicked: false },
    // button5: { alt: null, clicked: false },
    // button6: { alt: null, clicked: false },
  });

  const [building, setBuilding] = useState('');
  const [roomName, setRoomName] = useState('');
  const [loading, setLoading] = useState(false);

  const api = 'http://localhost:4000/api/v1/create';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const details = { building, roomName, locations };
    console.log('Form Data:', details); // Log form data

    try {
      const response = await axios.post(api, details, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Location successfully created:', response.data);
        alert('Location successfully created');
      } else {
        console.error('Failed to create location:', response.data);
        alert('Failed to create location');
      }
    } catch (error) {
      console.error('Error creating location:');
      alert('Failed to create location');
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = (button) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocations((prev) => ({
            ...prev,
            [button]: {
              lat: latitude,
              long: longitude,
              clicked: true,
            },
          }));
          console.log(`Location for ${button}:`, { latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleAltitudeClick = (button) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { altitude } = position.coords;
          setLocations((prev) => ({
            ...prev,
            [button]: { alt: altitude ?? 'Altitude not available', clicked: true },
          }));
          console.log(`Altitude for ${button}:`, { altitude });
        },
        (error) => {
          console.error('Error getting altitude:', error);
          alert('Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleBuildingChange = (e) => setBuilding(e.target.value);
  const handleRoomNameChange = (e) => setRoomName(e.target.value);

  return (
    <div className="createVenue">
      <form className="venue-form" onSubmit={handleSubmit}>
        <h1>Location Naming</h1>

        <label>Building Name:</label>
        <select required value={building} onChange={handleBuildingChange}>
          <option value="" disabled>Select a building</option>
          <option value="Building 1">Building 1</option>
          <option value="Building 2">Building 2</option>
        </select>

        <label>Room Name:</label>
        <input
          placeholder="e.g. Gf1"
          required
          value={roomName}
          onChange={handleRoomNameChange}
        />

        <div className="coordinates">
          <h3>Click on a button while standing at a coordinate of your scope</h3>
          <h3>UP and DOWN for the highest and lowest point one can reach</h3>

          <button
            type="button"
            className="p1"
            onClick={() => handleLocationClick('button1')}
            style={{ borderColor: locations.button1.clicked ? 'blue' : 'red' }}
          >
            point 1 <span style={{ color: 'red' }}>*</span>
          </button>

          <button
            type="button"
            onClick={() => handleLocationClick('button2')}
            className="point2"
            style={{ borderColor: locations.button2.clicked ? 'blue' : 'red' }}
          >
            point 2 <span style={{ color: 'red' }}>*</span>
          </button>

          <button
            type="button"
            onClick={() => handleLocationClick('button3')}
            className="point3"
            style={{ borderColor: locations.button3.clicked ? 'blue' : 'red' }}
          >
            point 3 <span style={{ color: 'red' }}>*</span>
          </button>

          <button
            type="button"
            onClick={() => handleLocationClick('button4')}
            className="point4"
            style={{ borderColor: locations.button4.clicked ? 'blue' : 'red' }}
          >
            point 4 <span style={{ color: 'red' }}>*</span>
          </button>

          {/* <button
            type="button"
            className="up"
            onClick={() => handleAltitudeClick('button5')}
            style={{ borderColor: locations.button5.clicked ? 'blue' : 'red' }}
          >
            up
          </button>

          <button
            type="button"
            className="down"
            onClick={() => handleAltitudeClick('button6')}
            style={{ borderColor: locations.button6.clicked ? 'blue' : 'red' }}
          >
            down
          </button> */}
        </div>
        <div className="submit">
          <button className="login-submit" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Create New Venue'}
          </button>
        </div>
      </form>
    </div>
  );
}

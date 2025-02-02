import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";

// Marker Icon Configuration
const userIcon = new L.Icon({
  iconUrl: markerIconUrl,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
  shadowUrl: markerShadowUrl,
  shadowSize: [41, 41],
});
const userLocation = [27.620028, 85.538953];
const parking1 = [27.617723, 85.538566];
const parking2 = [27.617722, 85.538567];

const API_PROXY_URL = "http://localhost:5000/api/parking"; // Proxy server

const Landing = () => {
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    fetchParkingData();
  }, []);

  const fetchParkingData = async () => {
    try {
      const response = await fetch(API_PROXY_URL);
      const data = await response.json();
      
      // Process the data: Get the latest entry for each unique spotID
      const latestSpots = processLatestSpots(data);
      setParkingData(latestSpots);
      
    } catch (error) {
      console.error("Error fetching parking data:", error);
    }
  };

// Function to get the latest timestamp for each unique spotId with "spot" prefix
const processLatestSpots = (data) => {
  const latestSpots = {};

  data.forEach(entry => {
    // If there's no entry for the spotId or the current timestamp is newer, update it
    if (!latestSpots[entry.spotId] || new Date(entry.timestamp) > new Date(latestSpots[entry.spotId].timestamp)) {
      latestSpots[entry.spotId] = entry;
    }
  });

  // Add "spot" prefix to each spotId and return the updated spots
  return Object.values(latestSpots).map(spot => ({
    ...spot,
    spotId: `spot${spot.spotId}`  // Prefix "spot" to the spotId
  }));
};


  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.text}>Welcome to Smart Parking</h1>
        <button style={styles.bookButton}>Book Spot</button>
      </div>

      {/* Map Section */}
      <div style={styles.mapContainer}>
        <MapContainer 
          center={[27.619308, 85.538988]} 
          zoom={18} 
          style={styles.map}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* User Location Marker */}
          <Marker position={userLocation} icon={userIcon}>
            <Popup>Current Location</Popup>
          </Marker>

          {/* Parking Spots Markers */}
          {console.log(parkingData)}
          {parkingData.map((spot) => (
            <Marker 
              key={spot.spotId}   
              position={spot.spotId === 1 ? parking1 : parking2} 
              icon={userIcon}
            >
              <Popup>
                <div>
                  <strong>Spot ID:</strong> 1<br />
                  <strong>Status:</strong> {spot.status ? "Occupied" : "Available"} <br />
                  <strong>Updated:</strong> {(spot.timestamp)}
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column", 
  },
  header: {
    height: "25vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", 
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  mapContainer: {
    height: "75vh", 
    width: "100%",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  bookButton: {
    position: "absolute",
    bottom: "30px", 
    right: "20px", 
    padding: "12px 24px",
    backgroundColor: "#244040",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: "1000"
  },
};

export default Landing;

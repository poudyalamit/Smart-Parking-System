import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

const userIcon = new L.Icon({
  iconUrl: markerIconUrl,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
  shadowUrl: markerShadowUrl,
  shadowSize: [41, 41],
});
const userLocation = [27.620028, 85.538953];
const destination = [27.617723, 85.538566];
const Landing = () => {
    const [spot, Setspot] = useState(0);
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
          <Marker position={userLocation} icon={userIcon}>
            <Popup>
              Current Location
            </Popup>
          </Marker>
          <Marker position={destination} icon={userIcon}>
            <Popup>
              <div className="d-flex flex-column text-200">
                {spot === 0 ? "All Spot Occupied" : spot === 1 ? "1 Spot Available" : 
                "All Spot Available"}
              </div>
            </Popup>
          </Marker>
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

import './App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

function App() {

   const markers = [
    {
      geocode: [47.1167, 51.8833],
      popUp: {
        title: 'Atyrau',
        image: 'https://avatars.mds.yandex.net/get-altay/4618902/2a0000017925fa3a8f1a0ca7e7c0dc0520d5/XXXL',
        description: 'ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА'
      }
    },
    {
      geocode: [43.2567, 76.9286],
      popUp: {
        title: 'Almaty',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67f0f82723d4b36b8bf90813_67f1031f727fd26fa53a249a/scale_1200',
        description: 'ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА'
      }
    },
    {
      geocode: [51.2225, 51.3725],
      popUp: {
        title: 'Uralsk',
        image: 'https://t4.ftcdn.net/jpg/02/36/13/07/360_F_236130744_fudMVBPirC1dX84F7TKVOYHTxdAjrezN.jpg',
        description: 'ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА'
      }
    },
    {
      geocode: [51.1801, 71.4460],
      popUp: {
        title: 'Astana',
        image: 'https://avatars.mds.yandex.net/i?id=ff0066133ef68a1453b4cf0292e37e5f_l-3986519-images-thumbs&n=13',
        description: 'ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА'
      }
    },
    {
      geocode: [41.2646, 69.2163],
      popUp: {
        title: 'Tashkent',
        image: 'https://weproject.media/upload/iblock/b6d/b6db1c94f26c51a5f21d126970acd163.jpg',
        description: 'ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА'
      }
    }
  ]

const customIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


  return (
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#f0f0f0"
}}>
  <div style={{
    width: "600px",
    height: "400px",
    border: "2px solid #ccc",
    borderRadius: "12px",
    overflow: "hidden"
  }}>
    
    <MapContainer 
      center={[48.0196, 66.9237]} 
      zoom={4} 
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map(marker => (
        <Marker key={marker.popUp.title} position={marker.geocode} icon={customIcon}>
          <Popup maxWidth={150} minWidth={150}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ margin: "5px 0" }}>{marker.popUp.title}</h3>
              <img 
                src={marker.popUp.image} 
                alt={marker.popUp.title} 
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p style={{ marginTop: "5px", fontSize: "14px" }}>
                {marker.popUp.description}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
</div>

  )
}

export default App

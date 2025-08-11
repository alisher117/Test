import './App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef } from "react";
import markerIconPng from "./assets/geoMark.svg";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

function App() {

  const markers = [
    {
      geocode: [47.105419, 51.893886],
      popUp: {
        title: 'Атырау',
        address: ' г. Атырау, улица Сатпаева 17Б, БЦ Atyrau Plaza, 2 этаж',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
    {
      geocode: [43.24533, 76.903549],
      popUp: {
        title: 'Алматы',
        address: 'г. Алматы, Ауэзова 60, угол Жамбыла, 8 этаж, офис 28. БЦ Almaty Residence',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
    {
      geocode: [51.2347124, 51.3936550],
      popUp: {
        title: 'Уральск',
        address: 'г. Уральск, Абулхайыр хана 2а, БЦ The Office 43',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
        {
      geocode: [51.16129, 53.03521],
      popUp: {
        title: 'Аксай',
        address: 'г.Аксай , ул. Дружба Народов 6/3',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
      {
      geocode: [43.654, 51.145],
      popUp: {
        title: 'Актау',
        address: 'г.Актау, 14 микрорайон, здание № 74/1, 6 этаж, кабинет №61',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
      {
      geocode: [50.291567278644315, 57.142518566891574],
      popUp: {
        title: 'Актобе',
        address: 'г.Актобе, пр. Санкибай батыра, 167«А» офис №108',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
    {
      geocode: [51.1455, 71.4061],
      popUp: {
        title: 'Астана',
        address: 'г. Астана, район Нура, шоссе Коргалжын, здание 3, БЦ «SMART» 4 этаж, офис 402',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    },
    {
      geocode: [41.2646, 69.2163],
      popUp: {
        title: 'Tashkent',
        address: 'Офиса пока что нет',
        contacts: '✉️ - info@fircaspian.com <br> 📞 - +7 712 276 32 72'
      }
    }
  ];

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
        width: "800px",
        height: "500px",
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
            url={`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=rYV20gequsBy3ANeRNdTMHz6X5htqVBZVXVK2BhIzXTbEafBUJVx8duoXesCAWqG`}
            attribution={
              '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> ' +
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
            minZoom={0}
            maxZoom={22}
          />

          {markers.map(marker => {
            const popupRef = useRef();
            return (
              <Marker
                key={marker.popUp.title}
                position={marker.geocode}
                icon={customIcon}
                eventHandlers={{
                  mouseover: (e) => {
                    e.target.openPopup();
                  },
                  mouseout: (e) => {
                    e.target.closePopup();
                  }
                }}
              >
                <Popup ref={popupRef} maxWidth={300} minWidth={150}>
                  <div style={{ textAlign: "center", fontFamily: "Montserrat" }}>
                    <h3 style={{ margin: "5px 0" }}>{marker.popUp.title}</h3>
                    <h4 style={{ marginTop: "5px", fontSize: "14px" }}>
                      {marker.popUp.address}
                    </h4>
                    <h4 style={{ margin: "5px 0"}} dangerouslySetInnerHTML={{ __html: marker.popUp.contacts }} />
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

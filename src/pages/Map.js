import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import './styles/map.css';
import Navbar from '../components/Navbar';


const markerIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/codegeous/react-component-depot/master/src/resources/images/marker.png",
  iconSize: [40, 40],
});


export default function Map(){
  
  return(
    <div className="App">
      <Navbar />
      <h1>Ubicanos en nuestras sedes</h1>
      <div className="Map">
        <MapContainer className="Map-container" center={[-12.0831363,-77.0189226]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      			url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
          />
          <Marker
                  position={[-12.09316,-76.9990127]}
                  icon= {markerIcon}
                  
          >
                  <Popup>
                    <b>DevPro sede San Borja</b>
                  </Popup>
          </Marker>
          <Marker
                  position={[-12.0828457,-76.9327047]}
                  icon= {markerIcon}
                  
          >
                  <Popup>
                    <b>DevPro sede La Molina</b>
                  </Popup>
          </Marker>
        </MapContainer>

      </div>
    </div>
  );
}
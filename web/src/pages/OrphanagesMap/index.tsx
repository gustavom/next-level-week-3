import React from 'react';
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container, SideBar, CreateOrphanage} from './styles';

import mapMarkerImg from '../../images/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
  <Container>
    <SideBar>
      <header>
        <img src={mapMarkerImg} alt="Happy"/>

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>

      </header>

      <footer>
        <strong>São Bernardo do campo</strong>
        <span>São Paulo</span>
      </footer>
    </SideBar>

    <Map 
      center={[-23.7429792,-46.5644216]} 
      zoom={15}
      style={{width: '100%', height:'100%'}}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
    </Map>

    <CreateOrphanage to="">
      <FiPlus size={32} color="#fff"/>
    </CreateOrphanage>
  </Container>
  )
}

export default OrphanagesMap;
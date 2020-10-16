import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from "../../images/map-marker.svg";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
export default function SideBar() {
  const { goBack } = useHistory();
  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Container>
  );
}

import React from 'react';
import {FiArrowRight} from 'react-icons/fi'

import { Container, Location, EnterApp } from './styles';

import logoImg from '../../images/logo.svg'

const landing: React.FC = () => {
  return <Container>
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy"/>
      
      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
      </main>

      <Location>
        <strong>São Bernardo do campo</strong>
        <span>São Paulo</span>
      </Location>

      <EnterApp to="/app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
      </EnterApp>
    </div>
  </Container>;
}

export default landing;
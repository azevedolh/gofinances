import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  selected?: 'listagem' | 'importar';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  selected = 'listagem',
}: HeaderProps) => (
  <Container size={size} selected={selected}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className="listagem" to="/">
          Listagem
        </Link>
        <Link className="importar" to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;

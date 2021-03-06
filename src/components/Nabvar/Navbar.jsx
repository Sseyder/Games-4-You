//Inicio de la Importacion de todos los componentes a usar
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
//Fin de la Importacion de todos los componentes a usar

//Inicio de Estilo de los componentes usando Styled-Components
const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
//Fin del Estilo de los componentes usando Styled-Components

//Inicio del Navbar
const Navbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Language>ES</Language>
            <SearchContainer>
              <Input placeholder="BUSCAR" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>GAMES 4 YOU.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTRARSE</MenuItem>
            <MenuItem>INGRESAR</MenuItem>
            <MenuItem>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  //Fin del Navbar
  
  //Exportacion del Navbar
  export default Navbar;


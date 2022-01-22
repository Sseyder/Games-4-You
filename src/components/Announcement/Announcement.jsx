import styled from "styled-components";

//Estilo del Anuncio
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

//JSX del anuncio
const Announcement = () => {
  return <Container>SUPER OFERTA! ENVIO GRATIS CON CUALQUIER COMPRA DE MAS DE 500$ PESOS!</Container>;
};

export default Announcement;
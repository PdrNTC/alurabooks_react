import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../services/favoritos';

// Criando um componente estilizado direto sem precisar de CSS //
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  }

  return (
    <AppContainer>
      { favoritos.map( favorito => (
        <p>{favorito.nome}</p>
      )) }
    </AppContainer>
  );
}

export default Favoritos;

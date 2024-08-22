import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../services/favoritos';
import livroImg from '../imgs/livro.png'

// Criando um componente estilizado direto sem precisar de CSS //
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
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

  async function deletarFavoritos(id) {
    await deleteFavorito(id)
    await fetchFavoritos() // atualizando os dados dps de deletar para mostrar na tela
    alert(`Livro de id: ${id} deletado!`)
  }

  return (
    <AppContainer>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>  
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado onClick={() => deletarFavoritos(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg} alt="Foto do livro"/>
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;

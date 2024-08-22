import axios from "axios";

// Criando a conexão com o back-end API de livros
const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

// criando a função assincrona para ter a promisse da resposta
async function getFavoritos() {
    const response = await favoritosAPI.get('/') // Espera o tempo de resposta da API

    return response.data // retornando os dados vindos da API
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
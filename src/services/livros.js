import axios from "axios";

// Criando a conexão com o back-end API de livros
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

// criando a função assincrona para ter a promisse da resposta
async function getLivros() {
    const response = await livrosAPI.get('/') // Espera o tempo de resposta da API

    return response.data // retornando os dados vindos da API
}

export {
    getLivros
}
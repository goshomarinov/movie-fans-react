import * as api from './requester';

export async function getPaginatedMovies(offset, pageSize) {
    return api.get(`/data/movies?offset=${offset}&pageSize=${pageSize}`);
}

export async function getAllmovies() {
    return api.get('/data/movies?sortBy=_createdOn%20desc');
}

export async function createMovie(data) {
    return api.post('/data/movies', data);
}

export async function getOneMovie(id) {
    return api.get(`/data/movies/${id}`);
}

export async function editMovies(id, data) {
    return api.put(`/data/movies/${id}`, data);
}

export async function deleteMovies(id) {
    return api.del(`/data/movies/${id}`);
}

export async function getResultSearch(query) {
    return api.get(`/data/movies?where=title%20LIKE%20%22${query}%22`);
}
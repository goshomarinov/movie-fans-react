import * as api from './requester';



export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function createMovie(data) {
    return api.post('/data/movies', data);
}

export async function getOneAlbum(id) {
    return api.get(`/data/albums/${id}`);
}

export async function editAlbum(id, data) {
    return api.put(`/data/albums/${id}`, data);
}

export async function deleteAlbum(id) {
    return api.del(`/data/albums/${id}`);
}

export async function getResultSearch(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}
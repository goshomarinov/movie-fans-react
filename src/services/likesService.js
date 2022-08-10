import * as api from './requester';

export async function getAllLikes() {
    return api.get(`/data/likes`);
}

export async function createLike(data) {
    return api.post(`/data/likes`, data);
}

export async function deleteLike(id) {
    return api.del(`/data/likes/${id}`);
}
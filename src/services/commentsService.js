import * as api from './requester';

export async function getAllComments() {
    return api.get(`/data/comments`);
}

export async function createComment(data) {
    return api.post(`/data/comments`, data);
}

export async function getOneComment(id) {
    return api.get(`/data/comments/${id}`);
}

export async function editComment(id, data) {
    return api.put(`/data/comments/${id}`, data);
}

export async function deleteComment(id) {
    return api.del(`/data/comments/${id}`);
}
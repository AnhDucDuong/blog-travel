import {
    axiosClient
} from "./axiosClient";

const PostsAPI = {
    postById() {
        const url = `postsId`;
        return axiosClient.param(url)
    },

    list() {
        const url = `/posts`;
        return axiosClient.get(url)
    },

    search(keyword) {
        const url = `/posts?name_like=${keyword}`;
        return axiosClient.get(url)
    },

    read(postsId) {
        const url = `/posts/${postsId}`;
        return axiosClient.get(url)
    },

    create(postsId) {
        const url = `/posts`;
        return axiosClient.post(url, postsId)
    },

    remove(postsId) {
        const url = `/posts/${postsId}`;
        return axiosClient.delete(url)
    },

    update(postsId, data) {
        const url = `/posts/${postsId}`;
        return axiosClient.put(url, data)
    }
}

export default PostsAPI;
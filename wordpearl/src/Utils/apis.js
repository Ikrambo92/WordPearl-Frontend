import axios from "axios";

const myAPI = axios.create({
    baseURL: "https://wordpearl-be.herokuapp.com",
});

//pearls
export const getPearls = () => {
    return myAPI.get("/pearls")
        .then((res) => {
            return res.data.pearls
        })
        .catch((err) => {
            throw err;
        });
}

//pearlById
export const getPearlById = (pearl_id) => {
    return myAPI.get(`/pearls/${pearl_id}`)
        .then((res) => {
            return res.data.pearl;
        })
        .catch((err) => {
            throw err;
        });
};

//oysters
export const getOysters = () => {
    return myAPI.get("/oysters")
        .then((res) => {
            return res.data.oysters
        })
        .catch((err) => {
            throw err;
        });
}

//oysterById
export const getOysterById = (oyster_id) => {
    return myAPI.get(`/oysters/${oyster_id}`)
        .then((res) => {
            return res.data.oyster;
        })
        .catch((err) => {
            throw err;
        });
};

//comments
export const getComments = () => {
    return myAPI.get("/comments")
        .then((res) => {
            return res.data.comments
        })
        .catch((err) => {
            throw err;
        });
}

//commentById
export const getCommentById = (comment_id) => {
    return myAPI.get(`/comments/${comment_id}`)
        .then((res) => {
            return res.data.comment;
        })
        .catch((err) => {
            throw err;
        });
};
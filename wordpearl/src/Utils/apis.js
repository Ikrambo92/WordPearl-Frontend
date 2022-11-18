import axios from "axios";

const myAPI = axios.create({
    baseURL: "https://wordpearl-be.herokuapp.com",
});

//getPearls
export const getPearls = () => {
    return myAPI.get("/pearls/")
        .then((res) => {
            return res.data.pearls
        })
        .catch((err) => {
            throw err;
        });
}

//getPearlById
export const getPearlById = (pearl_id) => {
    return myAPI.get(`/pearls/${pearl_id}`)
        .then((res) => {
            return res.data.pearl;
        })
        .catch((err) => {
            throw err;
        });
};

//patchPearlById
export const patchPearlById = (pearl_id, votes) => {
    return myAPI.put(`/pearls/${pearl_id}`, { 'votes': (votes + 1) })
        .then((res) => {
            return res.data.pearl;
        })
        .catch((err) => {
            throw err;
        });
};

//postPearlById
export const postPearl = (pearl_body, id, votes) => {
    return myAPI.post(`/pearls/`, { 'votes': (votes + 1) })
        .then((res) => {
            return res.data.pearl;
        })
        .catch((err) => {
            throw err;
        });
};

//getOysters
export const getOysters = () => {
    return myAPI.get("/oysters/")
        .then((res) => {
            return res.data.oysters
        })
        .catch((err) => {
            throw err;
        });
}

//getOysterById
export const getOysterById = (oyster_id) => {
    return myAPI.get(`/oysters/${oyster_id}`)
        .then((res) => {
            return res.data.oyster;
        })
        .catch((err) => {
            throw err;
        });
};

//postOyster
export const postOyster = (oyster) => {
    return myAPI.post(`/oysters/`)
        .then((res) => {
            return res.data.oyster;
        })
        .catch((err) => {
            throw err;
        });
};

//deleteOysterById
export const deleteOysterById = (oyster_id) => {
    return myAPI.delete(`/oysters/${oyster_id}`)
        .then((res) => {
            return res.data.oyster;
        })
        .catch((err) => {
            throw err;
        });
};

//getComments
export const getComments = () => {
    return myAPI.get("/comments/")
        .then((res) => {
            return res.data.comments
        })
        .catch((err) => {
            throw err;
        });
}

//getCommentById
export const getCommentById = (comment_id) => {
    return myAPI.get(`/comments/${comment_id}`)
        .then((res) => {
            return res.data.comment;
        })
        .catch((err) => {
            throw err;
        });
};

//postComment
export const postComment = (comment) => {
    return myAPI.get("/comments/")
        .then((res) => {
            return res.data.comment
        })
        .catch((err) => {
            throw err;
        });
}

//patchCommentById
export const patchCommentById = (comment_id) => {
    return myAPI.patch(`/comments/${comment_id}`)
        .then((res) => {
            return res.data.comment;
        })
        .catch((err) => {
            throw err;
        });
};
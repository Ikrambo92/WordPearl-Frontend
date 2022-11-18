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
export const postPearl = (body) => {
    return myAPI.post(`/pearls/`, {title: "examplePearl", username: "Dave", body: body, votes: 0, created_at: new Date()})
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

//getCommentByPearlId
export const getCommentByPearlId = (id) => {
    return myAPI.get(`/searchcomments/?format=json&search=${id}&ordering=-created_at`)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            throw err;
        })
}

//postComment
export const postComment = (comment) => {
    console.log(comment)
    return myAPI.post("/comments/", comment)
        .then((res) => {
            return res.data.comment
        })
        .catch((err) => {
            throw err;
        });
}

//patchCommentById
export const patchCommentById = (comment_id, putVotes) => {
    return myAPI.put(`/comments/${comment_id}`, { votes: putVotes })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};

//deleteCommentById
export const deleteCommentById = (id) => {
    return myAPI.delete(`/comments/${id}`)
      .then((res) => {

      })
      .catch((err) => {
        throw err;
      })
}
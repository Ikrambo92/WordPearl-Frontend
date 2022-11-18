import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentByPearlId} from "../Utils/apis";
import CommentById from "./CommentById";

const CommentsByPearl = () => { 

    const { id } = useParams()
    const [isComments, setIsComments] = useState([])

    useEffect(() => {
        getCommentByPearlId(id).then((response) => {
          setIsComments(response)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    return (
      isComments.map((comment) => {
        return <CommentById key={comment.id} comment={comment}/>
      })
    )

};

export default CommentsByPearl;
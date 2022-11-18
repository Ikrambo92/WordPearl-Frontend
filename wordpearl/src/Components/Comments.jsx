import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentByPearlId, postComment} from "../Utils/apis";
import CommentById from "./CommentById";

const CommentsByPearl = () => { 

    const { id } = useParams()
    const [isComments, setIsComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [posting, setPosting] = useState(false)

    useEffect(() => {
        getCommentByPearlId(id).then((response) => {
          setIsComments(response)
        }).catch((err) => {
            console.log(err)
        })
    }, [id, isComments])

    const handleChange = (event) => {
      setNewComment({
        "body": event.target.value,
        "username": 1,
        "pearl_id": 1,
        "created_at": "2022-11-18",
        "votes": 10
      })
    }

    const handleClick = () => {
      if(newComment === ''){
        alert("You cannot submit an empty comment")
        return;
      }
      setPosting(true)
      postComment(newComment).then((response) => {
        setPosting(false)
      })
    }

    return (
    <div>
      <br />
      {posting ? <p>Posting...</p> : <textarea id="commentBox" cols="30" rows="5" onChange={handleChange}></textarea>}
      <br />
      <button onClick={handleClick}>✍️ Join the conversation...</button>
      <div>
      {isComments.map((comment) => {
        return <CommentById key={comment.id} comment={comment}/>
      })}
      </div>
    </div>
    )

};

export default CommentsByPearl;
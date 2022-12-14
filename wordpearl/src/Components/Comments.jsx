import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentByPearlId, postComment} from "../Utils/apis";
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import CommentById from "./CommentById";

const CommentsByPearl = () => { 

    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [isComments, setIsComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [posting, setPosting] = useState(false)

    // const date =  new Date()
    // const day = date.getDate()
    // const month = date.getMonth()
    // const year = date.getFullYear()
    // const today =`${year}-${month}-${day}`

    useEffect(() => {
        getCommentByPearlId(id).then((response) => {
          setIsComments(response)
        }).catch((err) => {
        })
    }, [id, isComments])

    const handleChange = (event) => {
      setNewComment(event.target.value)
    }

    const handleClick = () => {
      if(newComment === ''){
        alert("You cannot submit an empty comment")
        return;
      }
      if(user.username === undefined){
        alert('Please sign-in to comment')
        return;
      }
      setPosting(true)
      postComment({
        "body": newComment,
        "username": user.id,
        "pearl_id": id,
        "created_at": "2022-11-24",
        "votes": 0
      }).then((response) => {
        setPosting(false)
      })
    }

    return (
    <div className="comment-sec">
      <br />
      {posting ? <p>Posting...</p> : <textarea id="commentBox" cols="30" rows="5" onChange={handleChange}></textarea>}
      <br />
      <button className="join-the-convo" onClick={handleClick}>✍️ Join the conversation...</button>
      <div>
      {isComments.map((comment) => {
        return <CommentById key={comment.id} comment={comment}/>
      })}
      </div>
    </div>
    )

};

export default CommentsByPearl;
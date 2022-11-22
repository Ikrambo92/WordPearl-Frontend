import { useState } from "react";
import { useEffect } from "react";
import { deleteCommentById, patchCommentById } from "../Utils/apis";
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const CommentById = ({ comment }) => {
  
    const { user } = useContext(UserContext)
    const { id, username, body, votes, created_at } = comment
    const [voteChange, setVoteChange] = useState(0);
    const [isvoteUp, setIsVoteUp] = useState(false)
    const [isvoteDown, setIsVoteDown] = useState(false)
    const [deleting, setDeleting] = useState(false)
    let putVotes = 0

    useEffect(() => {
        if (voteChange > 0){
          setIsVoteUp(true)
        }
        if (voteChange < 0){
          setIsVoteDown(true)
        }
        if (voteChange === 0){
          setIsVoteUp(false)
          setIsVoteDown(false)
        }
      }, [voteChange])

    const handleClickUp = (id, votes) => {
        console.log(id)
        putVotes = votes + 1
        setVoteChange((voteChange) => voteChange + 1);
      patchCommentById(id, putVotes);
    }
  
      const handleClickDown = (id, votes) => {
        putVotes = votes - 1
        setVoteChange((voteChange) => voteChange - 1);
        patchCommentById(id, putVotes)
      }

      const handleDelete = (event) => {
        setDeleting(true)
        deleteCommentById(event.target.value).then((response) => {
          setDeleting(false)
        })
      }

    return (
    <section>
    <br />
    {deleting && <p>Deleting comment...</p>}
    <dl key={id}>
      <dt>Username:</dt>
      <dd>{username}</dd>
      <dt>Comment:</dt>
      <dd>{body}</dd>
      <button onClick={() => handleClickUp(id, votes)} disabled={isvoteUp}>👍</button>
      <button onClick={() => handleClickDown(id, votes)} disabled={isvoteDown}>👎</button>
      <p>Votes: {votes + voteChange} </p>
      <p>Date: {created_at}</p>
      {user.username !== username ? <></> : <button id="deleteButton" value={id} onClick={handleDelete}>Delete 🗑️</button>}
    <br />
    </dl>
  </section>
  )
}

export default CommentById;
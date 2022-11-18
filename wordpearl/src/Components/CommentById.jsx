import { useState } from "react";
import { useEffect } from "react";
import { patchCommentById } from "../Utils/apis";

const CommentById = ({ comment }) => {
  
    const { id, username, body, votes, created_at } = comment
    const [voteChange, setVoteChange] = useState(0);
    const [isvoteUp, setIsVoteUp] = useState(false)
    const [isvoteDown, setIsVoteDown] = useState(false)
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

    return (
    <section>
    <br />
    <dl key={id}>
      <dt>Username:</dt>
      <dd>{username}</dd>
      <dt>Comment:</dt>
      <dd>{body}</dd>
      <button onClick={() => handleClickUp(id, votes)} disabled={isvoteUp}>👍</button>
      <button onClick={() => handleClickDown(id, votes)} disabled={isvoteDown}>👎</button>
      <p>Votes: {votes + voteChange} </p>
      <p>Date: {created_at}</p>
    <br />
    </dl>
  </section>
  )
}

export default CommentById;
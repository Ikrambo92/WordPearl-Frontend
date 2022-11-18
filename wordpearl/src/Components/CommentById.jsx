import { useState } from "react";
import { patchCommentById } from "../Utils/apis";

const CommentById = ({ comment }) => {
  
    const { id, username, body, votes, created_at } = comment
    const [voteChange, setVoteChange] = useState(0);
    let putVotes = 0

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
      <button onClick={() => handleClickUp(id, votes)}>👍</button>
      <button onClick={() => handleClickDown(id, votes)}>👎</button>
      <p>Votes: {votes + voteChange} </p>
      <p>Date: {created_at}</p>
    <br />
    </dl>
  </section>
  )
}

export default CommentById;
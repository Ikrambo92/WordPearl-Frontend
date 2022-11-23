import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { getOysterByUsername, getPearlById, patchPearlById, putOyster, deletePearlById } from '../Utils/apis';
import CommentsById from './Comments';
import "./SinglePearl.css"
import { useNavigate } from 'react-router-dom';

  const [pearl, setPearl] = useState([]);
  const { title, votes, body, username, created_at } = pearl;
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [voteChange, setVoteChange] = useState(0);
  const [isvoteUp, setIsVoteUp] = useState(false)
  const [isvoteDown, setIsVoteDown] = useState(false)
  let putVotes = 0

  useEffect(() => {
    getPearlById(id).then((pearl) => {
      setPearl(pearl);
      setIsLoading(false);
    })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [id, votes]);

  useEffect(() => {
    if (voteChange > 0) {
      setIsVoteUp(true)
    }
    if (voteChange < 0) {
      setIsVoteDown(true)
    }
    if (voteChange === 0) {
      setIsVoteUp(false)
      setIsVoteDown(false)
    }
  }, [voteChange])

  const handleClickUp = () => {
    putVotes = votes + 1
    setVoteChange((voteChange) => voteChange + 1);
    getOysterByUsername(pearl.username).then((res) => {
      putOyster(res.id, (res.points + 1))
    })
    patchPearlById(id, putVotes);
  }

  const handleClickDown = () => {
    putVotes = votes - 1
    setVoteChange((voteChange) => voteChange - 1);
    getOysterByUsername(pearl.username).then((res) => {
      putOyster(res.id, (res.points - 1))
    })
    patchPearlById(id, putVotes)
  }

  if (isLoading) return (<h2>Loading pearl...</h2>);

  return (
    <div className="single-card-container">
      {/* <section>
        <h2>{title}</h2>
        <h3>Pearl: {body}</h3>
        <h3>Author: {username}</h3>
        <h4>Date: {created_at}</h4>
        <div>
          <button onClick={() => handleClickUp()} disabled={isvoteUp}>👍</button>
          <button onClick={() => handleClickDown()} disabled={isvoteDown}>👎</button>
          <h5>Votes: {votes + voteChange} </h5>
        </div>
      </section> */}

      <div className="cards-container">
        <div className="card4">
          <div className="lines4"></div>
          <div className="content4">
            <div className="details4">
              <div className="data4">
                <h2>{title}</h2>
                <h3>Pearl: {body}</h3>
                <h3>Author: {username}</h3>
                <h4>Date: {created_at}</h4>
                <button onClick={() => handleClickUp()} disabled={isvoteUp}>👍</button>
                <button onClick={() => handleClickDown()} disabled={isvoteDown}>👎</button>
                <h5>Votes: {votes + voteChange} </h5>
                <CommentsById />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SinglePearl;
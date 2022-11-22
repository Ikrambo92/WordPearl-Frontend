import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOysterByUsername, getPearlById, patchPearlById, putOyster } from '../Utils/apis';
import CommentsById from './Comments';
import "./SinglePearl.css"

const SinglePearl = () => {

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ pearl, setPearl ] = useState({})
  const [ oyster, setOyster ] = useState({})
  const [ voteCount, setVoteCount ] = useState(0)
  const [ voteChange, setVoteChange ] = useState(0)
  const [isvoteUp, setIsVoteUp] = useState(false)
  const [isvoteDown, setIsVoteDown] = useState(false)

  useEffect(() => {
    getPearlById(id).then((res) => {
      setPearl(res)
      setVoteCount(res.votes)
      getOysterByUsername(res.username).then((res) => {
        setOyster(res[0])
        setIsLoading(false)       
      })
    })
  },[id, voteCount])

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

  const handleClickUp = () => {
    setVoteCount((CurrentVoteCount) => CurrentVoteCount + 1)
    setVoteChange((currentChange) => currentChange + 1)
    patchPearlById(pearl.id, voteCount + 1)
    putOyster(oyster.id, oyster.points + 1)
  }

  const handleClickDown = () => {
    setVoteCount((CurrentVoteCount) => CurrentVoteCount - 1)
    setVoteChange((currentChange) => currentChange - 1)
    patchPearlById(pearl.id, voteCount - 1)
    putOyster(oyster.id, oyster.points - 1)
  }

  if (isLoading) return (<h2>Loading pearl...</h2>)

      return (
      <main>
        <section id="singlepearl">
            <h2>{pearl.title}</h2>
                  <h3>Pearl: {pearl.body}</h3>
                  <h3>Author: {pearl.username}</h3>
                  <h4>Date: {pearl.created_at}</h4>
          <div>
            <button onClick={() => handleClickUp()} disabled={isvoteUp}>👍</button>
            <button onClick={() => handleClickDown()} disabled={isvoteDown}>👎</button>
            <h5>Votes: {pearl.votes} </h5>
        </div>
        <CommentsById />
      </section>
      </main>
    );
}


export default SinglePearl;

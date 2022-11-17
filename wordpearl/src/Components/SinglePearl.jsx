import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPearlById, patchPearlById } from '../Utils/apis';
//import CommentList from "./CommentList";

const SinglePearl = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [pearl, setPearl] = useState([]);
    const [voteIncrement, setVoteIncrement] = useState(0);
    const { title, votes, body, username, created_at } = pearl;


  const handleClick = (votes) => {
      setVoteIncrement((voteIncrement) => voteIncrement + 1);
      console.log(voteIncrement, 'second consolel log')
    patchPearlById(id, votes);
  }

    useEffect(() => {
        getPearlById(id).then((pearl) => {
            setPearl(pearl);
            setIsLoading(false);
    })
      .catch((err) => {
        setIsLoading(false);
      });
    }, [id]);

    if (isLoading) return (<h2>Loading pearl...</h2>);

      return (
      <main>
        <section>
            <h2>{title}</h2>
                  <h3>Pearl: {body}</h3>
                  <h3>Author: {username}</h3>
                  <h4>Date: {created_at}</h4>
          <div>
            <button onClick={() => handleClick(1)}>👍</button>
            <h5>Votes: {votes + voteIncrement} </h5>
        </div>
        {/* <CommentList /> */}
      </section>
      </main>
    );
}


export default SinglePearl;

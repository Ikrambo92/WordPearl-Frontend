import { Link } from 'react-router-dom'

const PearlCard = ({ pearl }) => {

    const { id, title, body, username, votes, created_at, comments } = pearl;
    
    return (
        <div>
            <br/>
            <Link to={`/pearls/${id}`}><h3>{title}</h3></Link>
            <div>
                <p> body: {body}</p>
                <p> author: {username}</p>
                <p> date: {created_at}</p>
                <p> votes: {votes}</p>
                <p> comments: {comments}</p>
            </div>
            <br/>
        </div>
    )
}

export default PearlCard;
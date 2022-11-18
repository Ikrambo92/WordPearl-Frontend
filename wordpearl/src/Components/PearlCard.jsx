import { Link } from 'react-router-dom'
import './PearlCard.css'

const PearlCard = ({ pearl }) => {

    const { id, title, body, username, votes, created_at, comments } = pearl;

    return (
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="lines"></div>
                    <div className="content">
                        <div className="details">
                            <Link to={`/pearls/${id}`}><h2>{title}</h2></Link>
                            <h5> {body}</h5>

                            <div className="data">
                                <p> {username}</p>
                                <p> {created_at}</p>
                                <p> votes: <span>{votes}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PearlCard;

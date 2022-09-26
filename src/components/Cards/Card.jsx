import star from '../../assets/Star 1.png'
import './Card.css'

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={props.image} className="card--image" />
                <div className="card--stats">
                    <img src={star} className="card--star"/>
                    <span>{props.rating}</span>
                    <span className='gray'>({props.reviewCount}) • </span>
                    <span className='gray'>{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    )
}
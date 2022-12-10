/* eslint-disable react/no-unknown-property */
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const RestaurantCard = props => {
  const {restaurant} = props
  const {imageUrl, name, cuisine, rating, totalReviews, id} = restaurant

  return (
    <li testid="restaurant-item" className="restaurant-item">
      <Link to={`/restaurant/${id}`} className="link-item">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div className="details-card">
          <div className="name-container">
            <h1 className="restaurant-name">{name}</h1>
            <p className="restaurant-cuisine">{cuisine}</p>
          </div>
          <div className="rating-container">
            <div className="rating-box">
              <p className="rating">{rating}</p>
              <AiFillStar className="star" />
            </div>
            <p className="reviews">({totalReviews} rating)</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default RestaurantCard

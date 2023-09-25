import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Card = ({donation}) => {
    const {id, title, category, picture, category_bg_color, card_bg_color, text_button_bg_color}= donation;
    const cardStyle={
        backgroundColor: card_bg_color
    }
    const textStyle = {
        color: text_button_bg_color
    }
    const catStyle = {
        color: category_bg_color,
        backgroundColor: card_bg_color
    }

    return (
        <Link to={`/description/${id}`}><div className= "card bg-base-100 shadow-xl rounded-none" style={cardStyle}>
        <figure><img className='w-full' src={picture} alt={title} /></figure>
        <div className="card-body" >
        <div className="badge font-medium badge-ghost" style={catStyle}>{category}</div> 
          <h2 className="card-title font-bold text-white text-base" style={textStyle}>
          {title}
          </h2>
          </div>
        </div></Link>
      
    );
};

Card.propTypes ={
    donation: PropTypes.object
}
export default Card;
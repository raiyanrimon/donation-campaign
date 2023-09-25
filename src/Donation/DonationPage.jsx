import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const DonationPage = ({donate}) => {
    const {id,title, picture, category,category_bg_color, card_bg_color, text_button_bg_color, price}= donate
    const cardStyle={
        backgroundColor: card_bg_color
    }
    const textStyle = {
        backgroundColor: text_button_bg_color
    }
    const catStyle = {
        color: category_bg_color,
        backgroundColor: card_bg_color
    }
    return (
       
        <>
        <div className="card card-side bg-base-100 shadow-xl" style={cardStyle}>
        <figure><img src={picture} alt={title}/></figure>
        <div className="card-body">
            <h2 className="badge badge-ghost" style={catStyle}>{category}</h2>
          <h2 className="card-title">{title}</h2>
          <p className="font-bold flex flex-grow" style={{color:category_bg_color }}>${price}.00</p>
          <div className="card-actions">
          <Link to={`/description/${id}`}><button className="btn btn-ghost text-white" style={textStyle}>View Details</button></Link>
          </div>
        </div>
      </div>
                
                
</>
         
       
    );
};
DonationPage.propTypes ={
    donate: PropTypes.object
}
export default DonationPage;
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props; //destructuring, if skkiped this line  you can use props.resName also below in h3 here we are just destructuring it. 

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime}= resData.info.sla;
  
 return (
     <div className="res-card">
       <img className="res-logo"
       alt="res-logo" 
        src={CDN_URL+ cloudinaryImageId}
        />
       <h3>{name}</h3> 
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{costForTwo}</h4>
       <h4>{deliveryTime} minutes</h4>
     </div>
 )
 };

 export default RestaurantCard;
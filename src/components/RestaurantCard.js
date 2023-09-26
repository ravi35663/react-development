import food_logo from "../../food.png"
const RestaurantCard = ({resData})=>{
    const {title,price,rating,images,category} = resData
    return (    
        <div className="res-card">
            <img 
                src={images[0]} 
                alt="food logo"
                className='res-logo'
            />
            <h3>{title.trim()}</h3>
            <h4>${price}</h4>
            <h4>{category}</h4>
            <h4>{rating}</h4>
        </div>
    )
}

export default RestaurantCard;
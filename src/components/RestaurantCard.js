import food_logo from "../../food.png"
const RestaurantCard = ({resData})=>{
    const {resName,cuisine,rating,eta} = resData
    return (    
        <div className="res-card">
            <img 
                src={food_logo} 
                alt="food logo"
                className='res-logo'
                />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
    )
}

export default RestaurantCard;
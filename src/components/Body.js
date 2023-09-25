import RestaurantCard from "./RestaurantCard";
import { listData } from "../utils/mocksData";
import { useState } from "react";

const Body = ()=>{

    const [listOfRestaurant,setListOfRestaurant] = useState([...listData]);

    const topRestaurants = ()=>{
        const data = listData.filter(item=>item.rating >= 4);
        setListOfRestaurant(data);
    }
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={topRestaurants}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* Res-card */}
                {listOfRestaurant?.map(item => (<RestaurantCard key={item.resName} resData={item}/>))}
            </div>

        </div>
    )
}

export default Body;
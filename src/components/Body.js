import RestaurantCard from "./RestaurantCard";
import { listData } from "../utils/mocksData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUi";

const Body = ()=>{
    // const [listOfRestaurant,setListOfRestaurant] = useState([...listData]);
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [copyListOfRestaurant,setCopyListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState('')
    useEffect(()=>{
        fetchData();
    },[])

    const topRestaurants = ()=>{
        const data = copyListOfRestaurant.filter(item=>item.rating >= 4.8);
        setListOfRestaurant(data);
    }
    const fetchData = async ()=>{
        const res = await fetch('https://dummyjson.com/products');
        const json = await res.json();
        // const slice_first = json.products.slice(0,10);
        setListOfRestaurant(json.products)
        setCopyListOfRestaurant(json.products)
    }
    const handleChange = (e)=>{
        setSearchText(e.target.value);
    }
    const handleSearch = ()=>{
        const searchedData = copyListOfRestaurant.filter(item=> item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        setListOfRestaurant(searchedData);
    }
    return (
        <>
            {listOfRestaurant.length ? (
            <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={handleChange}></input>
                <button onClick={handleSearch}>Search</button>
            </div>
                <button className="filter-btn" onClick={topRestaurants}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* Res-card */}
                {listOfRestaurant?.map(item => (<RestaurantCard key={item.id} resData={item}/>))}
            </div>

        </div>): <ShimmerUI />}  
        </>
    )
}

export default Body;
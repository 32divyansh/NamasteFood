import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
   const [ListofRestaurants, setListofRestaurants] = useState([]);
   const [searchtext, setsearchtext] = useState("");
   const[filteredRestaurants,setfilteredRestaurants] =useState([]);

   useEffect(() => {
      fetchData();
   }, []);


// const fetchData= async ()=>{
//    const data = await fetch("https://crossorigin.me/?https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627");

//    const json = await data.json();
//    console.log(json);


// }


   const fetchData = () => {
      setTimeout(() => {
         setListofRestaurants(reslist);
         setfilteredRestaurants(reslist);
      }, 1000);
   };

   // conditional rendering
   // if(ListofRestaurants.length===0){
   // return <Shimmer/>;

   // }

   return ListofRestaurants.length === 0 ? (<Shimmer />) : (
      <div className="Body">
         <div className="filter">
            <div className="Search">
               <input type="text" className="search-box" value={searchtext}
                  onChange={(e) => {
                     setsearchtext(e.target.value)
                  }} />
               <button className="search-btn" onClick={() => {

                  const searchedres = ListofRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                  setfilteredRestaurants(searchedres);
                  
                 
                  

               }}>Search</button>
            </div>
            
            <button className="filter-btn" onClick={() => {
               const filteredlist = reslist.filter(
                  (res) => res.info.avgRating > 4.5
               );
               setfilteredRestaurants(filteredlist);
               setsearchtext("");
              
            }}
            >Top Rated Restaurant</button>
            
         </div>
         <div className="res-container">
            {/* <RestaurantCard resData={reslist[0]} />
        <RestaurantCard resData={reslist[1]} /> */}

            {filteredRestaurants.map((restaurant) => (
               <RestaurantCard key={restaurant.info.id} resData={restaurant} />

            ))}
         </div>
      </div>


   )
};

export default Body;
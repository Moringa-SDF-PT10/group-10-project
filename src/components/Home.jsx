import { useState, useEffect } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import FoodList from "./FoodList"
import LoginForm from "./LoginForm"
import Search from "./Search"


function Home() {
 
//Initialize the initial state of data in an empty array before fetching
const [foods, setFoods]= useState([])

//Fetch data using the useEffect hook
 useEffect(()=>{

  fetch("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=8Rv57kYxBTe6DURXfAZu8DBKcol1W0hpsrc7d1xJ")
      .then(response => response.json())
      .then(data => setFoods(data.slice(3)))
      .catch(err => console.log("enable to fetch", err))
      
 },[])        
      
 // Log foods whenever it updates
 useEffect(() => {
   console.log(foods);
 }, [foods]);


 //Initialize the initial state of search
  const [searchedItem, setSearchedItem] = useState('')

  //updated the state of searched item to be the input on the form
  const formChangeHandler = (e)=>{
     setSearchedItem(e.target.value)

  }

const filteredList = foods.filter(food=> food.description && food.description.toLowerCase().includes(searchedItem.toLowerCase()))


  return (
    <>
    <div className = "container">
      {/* <h1>Food Nutrition App </h1> */}
      
      <Search formChangeHandler ={formChangeHandler}/>
      
      <FoodList foods = {filteredList}/>
    </div>
      
     
    </>
  )
}

export default Home

import Food from './Food.jsx'
import {useState} from 'react'
import Search from './Search'

export default function FoodList({foods, searchedItem}){

  const [deletedIds, setDeletedIDs] = useState([]) // Tracks deleted foods
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)


  //delete handler
  function onDeleteFood(fdcId){
    setDeletedIDs(prev => [...prev, fdcId]) // Deleted foods are added to the deletedIds array
    setFavorites(prev => prev.filter(id => id !== fdcId)) // The deleted Id is removed in the favorites too
  }



  function toggleDisplay(){
    setShowFavorites(!showFavorites)
  }

  // Checks if food is in the favorites array and removes it if so, else adds it.
  //  //toggle favorite handler
  const onToggleFavorite = (fdcId) => {
    setFavorites((prevFavorites) => prevFavorites.includes(fdcId) ? prevFavorites.filter(id => id !== fdcId) : [...prevFavorites, fdcId])
   }





    return(
    <>
      <br />
      <button className='toggleFavorites' onClick={toggleDisplay}>
          {showFavorites ? "Show All" : "Show Favorites"}
      </button>
    
      <div className = "food-list">
      
          {foods
            .filter(food => !deletedIds.includes(food.fdcId))
             .filter(food => 
    food.description?.toLowerCase().includes(searchedItem.toLowerCase())
  )

            .filter(food => !showFavorites || favorites.includes(food.fdcId))
            .map(food=>(
          <Food 
          key = {food.fdcId} 
          food = {food} 
          isFavorite={favorites.includes(food.fdcId)}
          onToggleFavorite={onToggleFavorite}
          onDeleteFood={onDeleteFood}
          />
        ))}
      </div>
    </>

    )
}
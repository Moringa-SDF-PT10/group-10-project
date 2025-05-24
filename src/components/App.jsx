import Home from './Home';
import LoginForm from './LoginForm';
import FoodJournalForm from "./FoodJournalForm"
import { Link, Routes, Route } from 'react-router-dom';


export default function App(){

return(

<div>
    <nav class = "app-nav">
        <Link to= {"/"}>Home</Link>
        <Link to= {"/LoginForm"}>LoginForm</Link>
        <Link to= {"/FoodJournalForm"}>FoodJournalForm</Link>
      
    </nav>
    <main className = "app-main">
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "/LoginForm" element = {<LoginForm/>}/>
            <Route path= "/FoodJournalForm" element = {<FoodJournalForm/>}/>




        </Routes>



    </main>
   


</div>



)
}
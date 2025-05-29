import Home from './Home';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import FoodJournalForm from "./FoodJournalForm"
import { Link, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import FoodDetails from "./FoodDetails"

// group 10 project


export default function App(){

return(

<div>
    <nav className = "app-nav">
        <Link to= {"/"}>Home</Link>
        <Link to= {"/LoginForm"}>LoginForm</Link>
        <Link to= {"/FoodJournalForm"}>FoodJournalForm</Link>
      
    </nav>
    <main className = "app-main">
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "/LoginForm" element = {<LoginForm/>}/>
            <Route path= "/SignUp" element = {<SignUp/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path= "/FoodJournalForm" element = {<FoodJournalForm/>}/>
            </Route>

            <Route path="/food/:fdcId" element={<FoodDetails />} />
            




        </Routes>



    </main>

   


</div>



)
}
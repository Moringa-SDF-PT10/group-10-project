import Home from './Home';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import FoodJournalForm from "./FoodJournalForm"
import { Link, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import PrivateRoute from './PrivateRoute';
import PersonalNotes from "./PersonalNotes";

import  { useAuth} from "./AuthContext";
import {useNavigate} from 'react-router-dom';


import FoodDetails from "./FoodDetails"

// group 10 project


export default function App(){

    const {user, setUser} = useAuth();
    const navigate =useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('isAuthenticated')
          navigate('/');
    }

return(

<div>
    <nav className = "app-nav">
        <Link to= {"/"}>Home</Link>
        <Link to= {"/LoginForm"}>LoginForm</Link>
        <Link to= {"/FoodJournalForm"}>FoodJournalForm</Link>
        <Link to= {"/PersonalNotes"}>PersonalNotes</Link>
         <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
      
    </nav>
    <main className = "app-main">
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "/LoginForm" element = {<LoginForm/>}/>
            <Route path= "/SignUp" element = {<SignUp/>}/>
           
            <Route path= "/FoodJournalForm" element = { <PrivateRoute><FoodJournalForm/></PrivateRoute>}/>
            <Route path= "/PersonalNotes" element = { <PrivateRoute><PersonalNotes/></PrivateRoute>}/>
      
             <Route path="/food/:fdcId" element={<FoodDetails />} />
            




        </Routes>



    </main>

   


</div>



)
}
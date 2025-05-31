import Home from './Home';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import FoodJournalForm from "./FoodJournalForm"
import { Link, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import About from './About';
import MyProfile from './MyProfile';
import MyFavorites from './MyFavorites';
import MyDashboard from './MyDashboard';
import MyGoals from './MyGoals';


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
        <Link to= {"/About"}>About</Link>
        <Link to= {"/MyFavorites"}>My Favorites</Link>
        <Link to= {"/FoodJournalForm"}>My Food Journal</Link>
        <Link to= {"/MyGoals"}>My Goals</Link>
        <Link to= {"/MyDashboard"}>My Dashboard</Link>
        <Link to= {"/LoginForm"}>Login Form</Link>
        <Link to= {"/SignUp"}>Sign Up</Link>
        <Link to= {"/MyProfile"}>My Profile</Link>
        
        
         <button onClick={handleLogout} className="logout-button">
            
            {!user? "Login" : "Logout"}   
            </button>

     
      
    </nav>
    <main className = "app-main">
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "/About" element = {<About/>}/>
            <Route path= "/LoginForm" element = {<LoginForm/>}/>
            <Route path= "/SignUp" element = {<SignUp/>}/>
           

            {/* Protected Route */}
            <Route path= "/FoodJournalForm" element = { <PrivateRoute><FoodJournalForm/></PrivateRoute>}/>
            <Route path= "/MyProfile" element = { <PrivateRoute><MyProfile/></PrivateRoute>}/>
            <Route path="/MyFavorites" element=  { <PrivateRoute><MyFavorites/></PrivateRoute>}/>      
            <Route path="/MyDashboard" element=  { <PrivateRoute><MyDashboard/></PrivateRoute>}/>   
            <Route path="/MyGoals" element=  { <PrivateRoute><FoodDetails /><MyGoals/></PrivateRoute>}/> 
                           
            




        </Routes>



    </main>

   


</div>



)
}
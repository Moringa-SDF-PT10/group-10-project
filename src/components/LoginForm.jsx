import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';


import { useAuth } from './AuthContext'


export default function LoginForm(){

    //initialized state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    //protection tool
    const { setUser } = useAuth();

    const navigate = useNavigate();


    //smart redirection tools
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    
    const handleLogin = () => {
        //retrieve stored user data from localStoreage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if(
            storedUser &&
            username === storedUser.username &&
            password === storedUser.password
        ) {
            localStorage.setItem('isAuthenticated', 'true')

            //protection tool
            setUser({username})
            //redirect user after login
           navigate(from, {replace: true});
        } else {
            alert('Invalid credentials');
        }
    };

    return(

    <div className="my-form-containerr">

        <form onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
           <input 
           type="text"
           placeholder="Enter your Username"
           value={username}
           onChange = {(e) => setUsername(e.target.value)}
           required
           />
           <input
           type="password"
           placeholder="Enter your password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />

           <button type="button" onClick={handleLogin}>Login</button>
           <p>Don't have an account?{''}<Link to= {"/SignUp"}>Sign Up</Link></p>
           
           


            
        </form>
    </div>


    )
}

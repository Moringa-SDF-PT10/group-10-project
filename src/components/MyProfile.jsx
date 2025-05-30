import  { useAuth} from "./AuthContext";
import { useNavigate } from 'react-router-dom';

function MyProfile(){
    const { user } = useAuth();// Get current logged-in user from context
    const navigate = useNavigate();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!user || !storedUser) {
        //Redirect to login if user is not logged in
        navigate('/LoginForm');
        return null; // Prevent rendering if not authenticated
    }

    return(
        <div>
            <h2>My Profile</h2>
            <p><strong>Username:</strong>{storedUser.username}</p>
            <p><strong>Email:</strong>{storedUser.email}</p>
            <p><strong>Password:</strong>{storedUser.password}</p>
        </div>

    )
}

export default MyProfile;
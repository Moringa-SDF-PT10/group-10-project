import  { useAuth} from "./AuthContext";
import { useNavigate } from 'react-router-dom';

function MyProfile(){
    const { user } = useAuth();
    const navigate = useNavigate();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!user || !storedUser) {
        navigate('/LoginForm');
        return null;
    }

    return(
        <div className="profile-container">
            <h2>My Profile</h2>
            <p><strong>Username:</strong> {storedUser.username}</p>
            <p><strong>Email:</strong> {storedUser.email}</p>
            <p><strong>Password:</strong> {storedUser.password}</p>
        </div>
    )
}

export default MyProfile;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//initializa state variable
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //function to handle sign up
  const handleSignUp = () => {
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("user registered successfully!");
    navigate(-1);
  };

  return (
    <div className="my-form-containerr">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Sign Up</h2>

        <input
          type="email"
          placeholder="Enter your Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="button" onClick={handleSignUp}>
          Register
        </button>
      </form>
    </div>
  );
}

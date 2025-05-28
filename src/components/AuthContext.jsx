import { createContext, useContext, useState } from 'react';

// Create a context for auth
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null means no one is logged in

  // This provides state and functions to other components
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// A custom hook to access auth context easily
export function useAuth() {
  return useContext(AuthContext);
}

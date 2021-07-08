import React, { useState, useContext, useEffect } from "react";
import { authenticationService } from ".";

export const AuthContext = React.createContext();

export const ProvideAuth = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser'))||null);
 
  const signin = ({ name: username, password }) => {
    return authenticationService.login(username, password).then((user) => {
      setUser(user);
      return user;
    });
  };

  const signout = () => {
    setUser(null);
    return authenticationService.logout();
  };

  const authContextData = { user, signin, signout };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

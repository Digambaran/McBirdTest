import React,{useState,useContext} from "react";
import { authenticationService } from ".";

export const AuthContext = React.createContext();

export const ProvideAuth = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = ({ name:username, password }) => {
      console.log('context signin called with',username,password);
    return authenticationService
      .login(username, password)
      .then((user) => {setUser(user);console.log('user context',user);return user;}).catch((error) =>{
        //do something with actual error here
        console.log(error)
        return  new Error('login failed')
      }
      )
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

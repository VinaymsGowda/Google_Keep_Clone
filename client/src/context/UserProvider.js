import { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({ children }) {
  const id = localStorage.getItem("id");

  const navigate = useNavigate();
  const path = useLocation();

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id && !["/login", "/register", "/"].includes(path.pathname)) {
      navigate("/");
    }
  }, [navigate]);

  return <UserContext.Provider>{children}</UserContext.Provider>;
}

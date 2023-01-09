import { Children, createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const LoginContext = createContext();

export const LoginProvider = () => {
  const [loginvalue, setLoginValue] = useState();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginvalue, [name]: value });
  };

  const storeLoginHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("user", loginvalue);
      navigate("/login");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  return (
    <LoginContext.Provider
      value={{ onchangeHandler,loginvalue,setLoginValue, errors, storeLoginHandler }}
    >
      {Children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

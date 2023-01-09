import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
const SkillContext = createContext();

const initialform = { name: "", slug: "" };
const initialformlogin = { name: "", username: "",email: "",password: "" };

export const SkillProvider = ({ children }) => {
  const [loginvalue, setLoginValue] = useState(initialformlogin);
  const onchangeLoginHandler = (e) => {
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



  const getUser = async (username) => {
    const response = await axios.get("user/" + username);
    const apiUser = response.data.data;
  };




  const [formVlaues, setFormValue] = useState(initialform);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formVlaues, [name]: value });
  };

  const getSkills = async () => {
    const apiSkills = await axios.get("skills");
    setSkills(apiSkills.data.data);
  };
  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    const apiSkill = response.data.data;
    setSkill(apiSkill);
    setFormValue({
      name: apiSkill.name,
      slug: apiSkill.slug,
    });
  };
  const storeHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("skills", formVlaues);
      setFormValue(initialform);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const UpdateSkillHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/skills/" + skill.id, formVlaues);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteSkillHandler = async (id) => {
    if (!window.confirm("will deleted are you sure")) {
      return;
    }
    await axios.delete("/skills/" + id);
    getSkills();
  };

  return (
    <SkillContext.Provider
      value={{
        skill,
        skills,
        initialform,
        getSkill,
        getSkills,
        onchangeHandler,
        formVlaues,
        storeHandler,
        setFormValue,
        errors,
        setErrors,
        UpdateSkillHandler,
        deleteSkillHandler,
        storeLoginHandler,
        onchangeLoginHandler,
        loginvalue,
        setLoginValue,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
export default SkillContext;

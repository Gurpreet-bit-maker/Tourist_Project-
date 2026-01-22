import { useEffect, useState } from "react";
import axios from "axios";
import userFormContext from "./formcreate";

let ShareFormContext = ({ children }) => {
  let [signUpData, setSignUpData] = useState([]);
  useEffect(() => {
    let call = async () => {
      try {
        let signDb = await axios.get("http://localhost:8080/signUp/userData");
        setSignUpData(signDb.data);
      } catch (error) {
        console.log(error);
      }
    };
    call();
  }, []);

  return (
    <userFormContext.Provider value={{  }}>
      {children}
    </userFormContext.Provider>
  );
};
export default ShareFormContext;

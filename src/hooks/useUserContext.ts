import {useContext} from "react";

import {UserContext} from "../context/UserContext";

const useUserContext = () => {
  const value = useContext(UserContext);

  if (!value) {
    throw Error("You should call useLanguageContext inside a Provider");
  }

  return value;
};

export default useUserContext;

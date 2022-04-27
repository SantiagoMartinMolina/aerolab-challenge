import React from "react";

import useUserContext from "~/hooks/useUserContext";
import Coin from "../../assets/icons/Coin";

import {StyledUserData} from "./styles";

const UserData = () => {
  const {
    state: fetchState,
    dispatch: {addPoints},
  } = useUserContext();

  if (fetchState.state === "loading" || fetchState.state === "idle") {
    return <div>cargando...</div>;
  }

  if (fetchState.state === "error" || !fetchState.data) {
    return <div>error</div>;
  }

  const handleButton = () => {
    addPoints(1000).then((res) => console.log(res));
  };

  return (
    <StyledUserData>
      <p className="user-name">{fetchState.data.name}</p>
      <p className="user-points">
        {fetchState.data.points} <Coin />
      </p>
      <button onClick={handleButton}>Agregar puntos</button>
    </StyledUserData>
  );
};

export default UserData;

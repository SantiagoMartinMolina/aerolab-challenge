import React, {useState} from "react";
import toast from "react-hot-toast";

import useUserContext from "~/hooks/useUserContext";
import Coin from "../../assets/icons/Coin";
import Spinner from "../Spinner";

import {StyledUserData} from "./styles";

const UserData = () => {
  const {
    state: fetchState,
    dispatch: {addPoints},
  } = useUserContext();
  const [loading, setloading] = useState(false);

  if (fetchState.state === "loading" || fetchState.state === "idle") {
    return <Spinner />;
  }

  if (fetchState.state === "error" || !fetchState.data) {
    return <div>error</div>;
  }

  const handleButton = () => {
    setloading(true);

    addPoints(1000).then((res) => {
      setloading(false);

      if (res.data) {
        toast.success(res.data.message, {duration: 1500});
      } else {
        toast.error("An error has occurred", {duration: 1500});
      }
    });
  };

  return (
    <StyledUserData>
      <p className="user-name">{fetchState.data.name}</p>
      <p className="user-points">
        {fetchState.data.points} <Coin />
      </p>
      <button disabled={loading ? true : undefined} onClick={handleButton}>
        {loading && <Spinner />}
        {!loading && "➕"}
      </button>
    </StyledUserData>
  );
};

export default UserData;

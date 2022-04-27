import React, {FC, useState} from "react";
import toast, {Toaster} from "react-hot-toast";

import Coin from "~/assets/icons/Coin";
import useUserContext from "~/hooks/useUserContext";
import Spinner from "../Spinner";

import {StyledCatalogItem} from "./styles";

interface Props {
  category: string;
  cost: number;
  img: {hdUrl: string; url: string};
  name: string;
  _id: string;
}

const CatalogItem: FC<Props> = ({category, name, img, cost, _id}) => {
  const [loading, setloading] = useState(false);
  const {
    state: fetchState,
    dispatch: {redeemNow},
  } = useUserContext();

  const handleClick = () => {
    setloading(true);
    redeemNow(cost, _id).then((res) => {
      setloading(false);

      if (res.data) {
        toast.success(res.data.message, {id: _id, duration: 1500});
      } else {
        toast.error("error", {id: _id, duration: 1500});
      }
    });
  };

  return (
    <StyledCatalogItem>
      <div className="img-container">
        <img alt="product image" src={img.hdUrl} />
      </div>
      <div className="info-container">
        <p className="category">{category}</p>
        <p className="name">{name}</p>
      </div>

      {fetchState.data?.points && fetchState.data.points < cost ? (
        <div className="message-container">
          <p>
            You need {cost - fetchState.data.points} <Coin />
          </p>
        </div>
      ) : (
        <div className="icon-container" />
      )}
      {fetchState.data?.points && fetchState.data.points > cost ? (
        <div className="overlay">
          <div className="icon-container" />
          <div className="content">
            <p>
              {cost} <Coin />
            </p>
            <button disabled={loading ? true : undefined} onClick={handleClick}>
              {loading && <Spinner />}
              {loading && "Redeeming"}
              {!loading && "Redeem"}
            </button>
          </div>
        </div>
      ) : null}
      <Toaster />
    </StyledCatalogItem>
  );
};

export default CatalogItem;

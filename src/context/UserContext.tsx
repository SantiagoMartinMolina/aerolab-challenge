import React, {createContext, FC, ReactNode} from "react";

import sendPost, {PostAPIResponse} from "~/utils/sendPost";
import useFetch from "../hooks/useFetch";

interface User {
  createDate: string;
  name: string;
  points: number;
  _id: string;
}

// type UseFetchState<T> = {
//   state: "idle" | "loading" | "error" | "success";
//   data: null | T;
//   error: null | Error;
// };

interface ContextProps {
  state: {
    state: "idle" | "loading" | "error" | "success";
    data: null | User;
    error: null | Error;
  };
  dispatch: {
    addPoints: (amount: number) => Promise<PostAPIResponse<PointsResponse>>;
    redeemNow: (cost: number, productId: string) => Promise<PostAPIResponse<RedeemResponse>>;
  };
}

interface UserProviderProps {
  children: ReactNode;
}

type UserAPIResponse = {
  createDate: string;
  name: string;
  points: number;
  _id: string;
};

// enum UserActionType {
//   SET_POINTS = "SET_POINTS",
// }

// interface SetUserAction {
//   type: typeof UserActionType.SET_POINTS;
//   payload?: string;
// }

type PointsResponse = {
  message: string;
  "new Points": number;
};

type RedeemResponse = {
  message: string;
};

type DataAddPoints = {
  amount: number;
};

type DataRedeemNow = {
  productId: string;
};

export const UserContext = createContext({} as ContextProps);

const UserProvider: FC<UserProviderProps> = ({children}) => {
  const {fetchState, setFetchState} = useFetch<UserAPIResponse>(
    "user",
    "https://coding-challenge-api.aerolab.co/user/me",
  );

  const addPoints = (amount: number) => {
    const response = sendPost<PointsResponse, DataAddPoints>(
      {amount},
      "https://coding-challenge-api.aerolab.co/user/points",
    ).then((res) => {
      if (res.data) {
        const newData = fetchState.data;

        if (newData) {
          newData.points += amount;
          setFetchState((prev) => ({...prev, data: newData}));
          window.localStorage.setItem("user", JSON.stringify(newData));
        }
      }

      return res;
    });

    return response;
  };

  const redeemNow = (cost: number, productId: string) => {
    const response = sendPost<RedeemResponse, DataRedeemNow>(
      {
        productId,
      },
      "https://coding-challenge-api.aerolab.co/redeem",
    ).then((res) => {
      if (res.data) {
        const newData = fetchState.data;

        if (newData) {
          newData.points -= cost;
          setFetchState((prev) => ({...prev, data: newData}));
          window.localStorage.setItem("user", JSON.stringify(newData));
        }
      }

      return res;
    });

    return response;
  };

  return (
    <UserContext.Provider
      value={{
        state: fetchState,
        dispatch: {addPoints, redeemNow},
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

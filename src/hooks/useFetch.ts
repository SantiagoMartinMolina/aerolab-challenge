import axios from "axios";
import {useEffect, useState} from "react";

export type UseFetchState<T> = {
  state: "idle" | "loading" | "error" | "success";
  data: null | T;
  error: null | Error;
};

const useFetch = <T>(key: string, url: string) => {
  const initialState = (): UseFetchState<T> => {
    const valueInLocalStorage = window.localStorage.getItem(key);

    if (valueInLocalStorage) {
      return {
        state: "success",
        data: JSON.parse(valueInLocalStorage),
        error: null,
      };
    } else {
      return {
        state: "idle",
        data: null,
        error: null,
      };
    }
  };

  const [fetchState, setFetchState] = useState<UseFetchState<T>>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fetchState.state === "idle") {
          setFetchState((oldValue) => ({
            ...oldValue,
            state: "loading",
          }));

          const response = await axios({
            method: "GET",
            url,
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVmOTVmYWNjNmQ0ODAwMjEwOWEzY2EiLCJpYXQiOjE2NTA0MzE0ODJ9.c-cPjmGGRL9mb1wyoqzoDPcgnVba4kM1-wL9UDl-NzY`,
            },
          });

          if (response.status === 200) {
            window.localStorage.setItem(key, JSON.stringify(response.data));

            setFetchState({
              data: response.data,
              state: "success",
              error: null,
            });
          } else {
            setFetchState({
              data: null,
              state: "error",
              error: new Error(response.statusText),
            });
          }
        }
      } catch (error) {
        setFetchState({
          data: null,
          state: "error",
          error: error as Error,
        });
      }
    };

    fetchData();
  }, [url, fetchState.state, key]);

  return {fetchState, setFetchState};
};

export default useFetch;

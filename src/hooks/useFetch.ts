import axios from "axios";
import {useEffect, useState} from "react";

type UseFetchState<T> = {
  state: "idle" | "loading" | "error" | "success";
  data: null | T;
  error: null | Error;
};

interface Props {
  method?: "POST" | "GET";
  url: string;
  data?: {[key: string]: string | number};
}

const useFetch = <T>({method = "GET", url, data}: Props) => {
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchState((oldValue) => ({
          ...oldValue,
          state: "loading",
        }));

        const response = await axios({
          method,
          url,
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVmOTVmYWNjNmQ0ODAwMjEwOWEzY2EiLCJpYXQiOjE2NTA0MzE0ODJ9.c-cPjmGGRL9mb1wyoqzoDPcgnVba4kM1-wL9UDl-NzY`,
          },
        });

        if (response.status === 200) {
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
      } catch (error) {
        setFetchState({
          data: null,
          state: "error",
          error: error as Error,
        });
      }
    };

    fetchData();
  }, [url, method, data]);

  return fetchState;
};

export default useFetch;

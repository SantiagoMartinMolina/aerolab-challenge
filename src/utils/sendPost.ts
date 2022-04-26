import axios from "axios";

export type PostAPIResponse<T> =
  | {
      data: T;
      state: string;
      error: null;
    }
  | {
      data: null;
      state: string;
      error: Error;
    };

const sendPost = async <T, T1>(data: T1, url: string): Promise<PostAPIResponse<T>> => {
  try {
    const response = await axios({
      method: "POST",
      url,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVmOTVmYWNjNmQ0ODAwMjEwOWEzY2EiLCJpYXQiOjE2NTA0MzE0ODJ9.c-cPjmGGRL9mb1wyoqzoDPcgnVba4kM1-wL9UDl-NzY`,
      },
      data,
    });

    if (response.status === 200) {
      return {
        data: response.data,
        state: "success",
        error: null,
      };
    } else {
      return {
        data: null,
        state: "error",
        error: new Error(response.statusText),
      };
    }
  } catch (error) {
    return {
      data: null,
      state: "error",
      error: error as Error,
    };
  }
};

export default sendPost;

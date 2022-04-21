import React, {FC} from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
    </>
  );
};

export default App;

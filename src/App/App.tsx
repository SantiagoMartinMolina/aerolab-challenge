import React, {FC} from "react";

import Header from "~/components/Header";
import Main from "~/components/Main";
import Navbar from "~/components/Navbar";

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

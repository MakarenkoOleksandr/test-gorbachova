import React, { useState } from "react";
import "./styles/scss/style.scss";
import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="container">
      <div className="wrap">
        <Header />
        <Aside setActiveMenu={setActiveMenu} />
        <Main selectedMenu={activeMenu} />
      </div>
    </div>
  );
};

export default App;

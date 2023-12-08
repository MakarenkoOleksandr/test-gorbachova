import "./styles/scss/style.scss";

import Header from "./components/header";
import Aside from "./components/aside";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Aside />
    </div>
  );
};

export default App;

import menu from "./../props/menu";
import logo from "./../img/logo.svg";
import { useState } from "react";

const AsideMenu = () => {
  const [active, setActive] = useState(null);
  const setActiveEl = (index) => {
    setActive(index);
  };

  return (
    <nav className="aside__navigation-menu menu">
      <div className="menu__logo">
        <img className="menu__logo-img" alt="logo" src={logo}></img>
        <strong className="menu__logo-title">Dashboard</strong>
      </div>

      <ul className="menu__wrap">
        {menu.name.map((el, index) => {
          const isActive = index === active;
          const imagePath = require(`./../img/menu/${el.toLowerCase()}_${
            isActive ? "active" : "normal"
          }.svg`);

          return (
            <li
              className={`menu__item ${isActive ? "active" : ""}`}
              key={index}
            >
              <div
                className="menu__item-link"
                onClick={() => setActiveEl(index)}
                key={index}
              >
                <div
                  className="menu__item-img"
                  style={{ backgroundImage: `url(${imagePath})` }}
                ></div>
                <span
                  className={`menu__item-content ${isActive ? "active" : ""}`}
                >
                  {el}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AsideMenu;

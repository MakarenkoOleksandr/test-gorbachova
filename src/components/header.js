import userInfo from "./../props/user.js";

const Header = () => {
  return <header>Hello {userInfo.name} 👋🏼</header>;
};

export default Header;

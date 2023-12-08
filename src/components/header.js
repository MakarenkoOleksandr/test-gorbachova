import userInfo from "./../props/user.js";

const Header = () => {
  return <header className="header">Hello {userInfo.name} 👋🏼,</header>;
};

export default Header;

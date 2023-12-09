import Customers from "./main/customers";

const Main = ({ selectedMenu }) => {
  switch (selectedMenu) {
    // case 0: "Dashboard"
    // case 1: "Product"
    // ......

    default:
      return <Customers />;
  }
};

export default Main;

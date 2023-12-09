import { useState } from "react";
import customers from "../../props/customers";
import Button from "./customer-button";
import FootButtons from "./foot-button";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="main">
      <section className="customers">
        <div className="customers__head">
          <h2 className="customers__head-title">All Customers</h2>
          <span className="customers__head-active">Active Members</span>
          <input
            type="search"
            className="customers__head-search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="customers__list">
          <div className="customers__list-title">
            <div className="customers__inline">Customer Name</div>
            <div className="customers__inline">Company</div>
            <div className="customers__inline">Phone Number</div>
            <div className="customers__inline">Email</div>
            <div className="customers__inline">Country</div>
            <div className="customers__inline">Status</div>
          </div>

          {filteredCustomers.map((customer, index) => (
            <div className="customers__list-items" key={index}>
              <div className="customers__inline">{customer.name}</div>
              <div className="customers__inline">{customer.company}</div>
              <div className="customers__inline">{customer.phoneNumber}</div>
              <div className="customers__inline">{customer.email}</div>
              <div className="customers__inline">{customer.country}</div>
              <div className="customers__inline">
                <Button status={customer.status} />
              </div>
            </div>
          ))}
        </div>
        <div className="customers__foot">
          <div className="customers__foot-content">
            Showing data 1 to 8 of 256K entries
          </div>
          <FootButtons />
        </div>
      </section>
    </main>
  );
};

export default Customers;

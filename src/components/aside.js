import AsideMenu from "./aside/aside-menu";
import AsideUser from "./aside/aside-user";

const Aside = ({ setActiveMenu }) => {
  return (
    <aside className="aside">
      <section className="aside__navigation">
        <AsideMenu setActiveMenu={setActiveMenu} />
        <AsideUser />
      </section>
    </aside>
  );
};

export default Aside;

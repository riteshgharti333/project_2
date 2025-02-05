import Sidebar from "../../components/Sidebar/Sidebar";
import "./OfficeSupplies.scss";
import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";

const OfficeSupplies = () => {
  return (
    <div className="officeSupplies">
    

      <div className="officeSupplies-content">
        <div className="officeSupplies-banner">
          <div className="officeSupplies-banner-info">
            <h2>Custom Stationery</h2>
            <p>Create a cohesive set of custom office supplies.</p>
          </div>

          <div className="officeSupplies-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="officeSupplies-lists-container">
          <div className="officeSupplies-lists">
            <div className="officeSupplies-items">
              <h1>Best Sellers</h1>

              <div className="officeSupplies-cards">
                {cards.map((card) => (
                  <MainCard card={card} cardDesign="officeSuppliesCard" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSupplies;

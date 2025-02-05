import Sidebar from "../../components/Sidebar/Sidebar";
import "./Stamps.scss";
import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";

const Stamps = () => {
  return (
    <div className="stamps">
      <div className="stamps-sidebar">
        <Sidebar />
      </div>

      <div className="stamps-content">
        <div className="stamps-banner">
          <div className="empty-div"></div>
          <div className="stamps-banner-info">
            <h2>Custom Stamps & Ink</h2>
            <p>
              Save time when addressing or signing documents with our
              personalised stamps.
            </p>
          </div>
          <div></div>

          <div className="stamps-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="stamps-lists-container">
          <div className="set-size"></div>

          <div className="stamps-lists">
            <div className="stamps-items">
              <h1>Custom Stamps</h1>

              <div className="stamps-cards">
                {cards.map((card) => (
                  <MainCard card={card} cardDesign="stampsCard" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stamps;

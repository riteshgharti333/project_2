import Sidebar from "../../components/Sidebar/Sidebar";
import "./LabelsStickers.scss";
import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";

const LabelsStickers = () => {
  return (
    <div className="labelsStickers">
      <div className="labelsStickers-sidebar">
        <Sidebar />
      </div>

      <div className="labelsStickers-content">
        <div className="labelsStickers-banner">
          <div className="labelsStickers-banner-info">
            <h2>Labels, Stickers & Packaging</h2>
            <p>
              Promote your business logo with customized stickers, labels, and
              packaging.
            </p>

            <div className="labelsStickers-buttons">
              <button>Labels</button>
              <button>Stickers</button>
              <button>Packaging</button>
            </div>
          </div>

          <div className="labelsStickers-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="labelsStickers-lists-container">
          <div className="labelsStickers-lists">
            <div className="labelsStickers-items">
              <h1>Custom Labels</h1>

              <div className="labelsStickers-cards">
                {cards.map((card) => (
                  <MainCard card={card} cardDesign="labelsStickersCard" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelsStickers;

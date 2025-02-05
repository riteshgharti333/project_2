import "./About.scss";
import icon1 from "../../assets/images/svg-icons/icon1.svg";
import icon2 from "../../assets/images/svg-icons/icon2.svg";
import icon3 from "../../assets/images/svg-icons/icon3.svg";
import icon4 from "../../assets/images/svg-icons/icon4.svg";
import icon5 from "../../assets/images/svg-icons/icon5.svg";
import card1 from "../../assets/images/cards1.jpg";

import mission1 from "../../assets/images/svg-icons/mission1.svg";
import mission2 from "../../assets/images/svg-icons/mission2.svg";
import mission3 from "../../assets/images/svg-icons/mission3.svg";
import mission4 from "../../assets/images/svg-icons/mission4.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="banner-desc">
          <h1>About Us</h1>

          <div className="banner-sm-desc">
            <Link to={"/"}>
            <span className="home">Home</span>
            
            </Link>
            <span className="line">/</span>
            <span className="about-us">About Us</span>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <h1>Who We Are</h1>
          <div className="about-content-desc">
            <div className="about-content-img">
              <img src={card1} alt="" />
            </div>
            <p>
              BS Printers was founded in 2006 by Shahjad Ali, a passionate
              entrepreneur with a vision to revolutionize the printing industry
              in Sikar, Rajasthan. With a deep love for stationery printing,
              and high-quality printing, he started BS Printers to provide
              premium printing solutions. Over the years, we have grown into a
              trusted name, offering a wide range of printing services,
              including letterheads, flex banners, business cards, brochures,
              wedding cards, packaging materials, and more.
            </p>
          </div>
        </div>

        <div className="about-content2">
          <h1>Our Vision</h1>
          <div className="about-content2-desc">
            <p>
              To be the most reliable and innovative printing solution provider
              in Sikar and beyond, offering high-quality prints with creative
              designs at affordable prices.
            </p>

            <div className="about-content2-img">
              <img src={card1} alt="" />
            </div>
          </div>
        </div>

        <div className="about-content3">
          <h1>Our Mission</h1>

          <div className="about-content3-cards">
            <div className="about-content3-card">
              <img src={mission1} alt="" className="icon" />
              <p>
                To deliver top-notch printing services that cater to the unique
                needs of businesses and individuals.
              </p>
            </div>

            <div className="about-content3-card">
              <img src={mission2} alt="" className="icon" />

              <p>
                To incorporate the latest technology and trends in printing,
                ensuring high-quality results.
              </p>
            </div>

            <div className="about-content3-card">
              <img src={mission3} alt="" className="icon" />

              <p>
                To provide excellent customer service with a focus on precision,
                creativity, and timely delivery.
              </p>
            </div>

            <div className="about-content3-card">
              <img src={mission4} alt="" className="icon" />

              <p>
                To support businesses in branding and marketing through
                impactful print materials.
              </p>
            </div>
          </div>
        </div>
        <div className="about-content4">
          <h1>Why Choose BS Printers?</h1>

          <div className="about-content-cards">
            <div className="about-content4-desc">
              <div className="about-content-icon">
                <img src={icon4} alt="" />
              </div>

              <h3>High-Quality Printing </h3>
              <p>
                We use the latest printing technology to ensure sharp and
                vibrant prints.
              </p>
            </div>

            <div className="about-content4-desc">
              <div className="about-content-icon">
                <img src={icon5} alt="" />
              </div>
              <h3>Wide Range of Services</h3>
              <p>
                From stationery to large-scale flex banners, we cover all
                printing needs.
              </p>
            </div>

            <div className="about-content4-desc">
              <div className="about-content-icon">
                <img src={icon3} alt="" />
              </div>
              <h3>Affordable Pricing</h3>
              <p>
                We believe in delivering value for money without compromising on
                quality.
              </p>
            </div>

            <div className="about-content4-desc">
              <div className="about-content-icon">
                <img src={icon1} alt="" />
              </div>
              <h3>Customization & Creativity</h3>
              <p>
                Our team works closely with clients to create unique and
                eye-catching designs.
              </p>
            </div>

            <div className="about-content4-desc">
              <div className="about-content-icon">
                <img src={icon2} alt="" />
              </div>
              <h3>Timely Delivery</h3>
              <p>
                {" "}
                We understand the importance of deadlines and ensure prompt
                service.
              </p>
            </div>
          </div>
        </div>

        <div className="about-content5">
          <h1>Our Services</h1>

          <div className="about-content5-cards">
            <div className="about-content5-card">
              <img src={card1} alt="" />
              <p>
                Flex & Vinyl Printing (Hoardings, Banners, Posters, Vehicle
                Branding)
              </p>
            </div>

            <div className="about-content5-card">
              <img src={card1} alt="" />
              <p>
                Corporate Stationery (Letterheads, Envelopes, Business Cards)
              </p>
            </div>

            <div className="about-content5-card">
              <img src={card1} alt="" />
              <p>Wedding & Invitation Cards</p>
            </div>

            <div className="about-content5-card">
              <img src={card1} alt="" />
              <p>Packaging & Labels</p>
            </div>

            <div className="about-content5-card">
              <img src={card1} alt="" />
              <p>Screen Printing & Offset Printing</p>
            </div>

            <div className="about-content5-card">
              <img src={card1} alt="" />
              <p>Customized Printing Solutions</p>
            </div>
          </div>
        </div>

        <div className="about-content6">
          <p>
          At BS Printers, we take pride in bringing your ideas to life with high-quality printing and creative designs. Whether you need marketing materials for your business or personalized prints for special occasions, we are here to serve you with excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

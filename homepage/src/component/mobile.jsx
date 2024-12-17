import React from "react";
import Slider from "react-slick";
import "./Mobile.css";
import section1 from "../assets/images/section1.png.png";
import section2 from "../assets/images/section2.png";
import section4 from "../assets/images/section4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    id: 1,
    title: "Ratna Mace IT Solutions Launches New AI-Powered Platform",
    content: `We’re thrilled to announce the launch of our new
    AI-powered platform designed to enhance operational
    efficiency for our clients across industries. Explore
    how we’re revolutionizing IT solutions!`,
    date: "November 12, 2024",
  },
  {
    id: 2,
    title: "New AI Tools Released for Data Analysis",
    content: `Discover how our new suite of AI tools can help businesses optimize
    their data analysis processes for better decision making. These tools
    provide actionable insights quickly, leveraging AI to stay competitive.`,
    date: "November 10, 2024",
  },
  {
    id: 3,
    title: "Breaking: IT Solutions Achieve Milestone",
    content: `Ratna Mace IT Solutions celebrates its milestone of serving 1000+
    clients worldwide. This achievement reflects the hard work and dedication
    of our team, paving the way for greater milestones ahead!`,
    date: "November 8, 2024",
  },
  {
    id: 4,
    title: "Introducing Enhanced Cybersecurity Features",
    content: `Our platform now includes enhanced cybersecurity features to ensure
    your data remains protected from emerging threats. Stay ahead with
    top-notch solutions.`,
    date: "November 7, 2024",
  },
  {
    id: 5,
    title: "Cloud Integration Now Available for Clients",
    content: `We're excited to offer cloud integration for all our services, making
    it easier for businesses to scale operations. Enjoy flexibility and
    scalability with our solutions.`,
    date: "November 5, 2024",
  },
  {
    id: 6,
    title: "AI-driven Insights for Better Decision Making",
    content: `Leverage AI-driven insights to make faster, data-driven decisions in
    your organization. Enhance strategies and stay competitive with
    AI-powered analytics.`,
    date: "November 3, 2024",
  },
];

const Mobile = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="page-container">
      {/* Section 1 */}
      <section className="section">
        <h1 className="main-title">Empowering businesses with smarter IT solutions!</h1>
        <div className="image-text-container">
          <img
            src={section1}
            alt="IT Team"
            className="section-image"
          />
          <p className="reverse">
            Innovate, optimize, and scale with our cutting-edge technologies and tailored strategies.
            Transform your challenges into opportunities—let's shape the future of your business today.
          </p>
        </div>
        <div className="button-container">
          <button className="button purple-button">Explore Services</button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section">
        <h2 className="sub-title">Why Choose Us?</h2>
        <div className="image-text-container">
          <p className="section-text">
            We deliver tailored IT solutions with cutting-edge technology and industry expertise.
            Trusted by businesses worldwide, our focus is your success, every step of the way.
          </p>
          <img
            src={section2}
            alt="Why Choose Us"
            className="section-image"
          />
        </div>
        <div className="button-container">
          <button className="button green-button">Discover the difference</button>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section highlighted">
        <h2 className="sub-title">What’s new?</h2>
        <Slider {...carouselSettings}>
          {cardData.map((card) => (
            <div key={card.id} className="newsletter-card-mobile">
              <h3 className="mobile-card-title">{card.title}</h3>
              <p className="mobile-card-content">{card.content}</p>
              <p className="mobile-card-date">{card.date}</p>
              
            </div>
          ))}
        </Slider>

        <button className="subscribe-button-mobile">Subscribe to newsletter</button>
      </section>

      {/* Section 4 */}
      <section className="section">
        <h2 className="sub-title">JOIN OUR TEAM OF INNOVATORS!</h2>
        <div className="image-text-container">
          <p className="section-text">
            We are looking for talented individuals who are passionate about technology and ready to
            make an impact. Discover exciting career opportunities and grow with us!
          </p>
          <img
            src={section4}
            alt="Team of Innovators"
            className="section-image"
          />
        </div>
        <div className="button-container2">
          <button className="button blue-button">Learn more</button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
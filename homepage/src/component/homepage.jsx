import React, { useState, useEffect } from "react";
import "./homepage.css";
import section1 from "../assets/images/section1.png.png";
import section2 from "../assets/images/section2.png";
import section4 from "../assets/images/section4.png"


const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1118);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log(window.innerWidth);
    }
  }, []);

  return (
    <>

      
        <div className="container">
          {isMobile && <div className="mobileTitle">
            <h1>Empowering businesses with
              <br />
              smarter IT solutions!</h1>
          </div>}
          <div className="text-section">
            {!isMobile && <div className="title">
              <h3>Empowering businesses with
                <br />
                smarter IT solutions!</h3>
            </div>}
            <p>
              Innovate, optimize, and scale with
              <br />
              our cutting-edge technologies and
              <br />
              tailored strategies. Transform your
              <br />
              challenges into opportunities—let's
              <br />
              shape the future of your business
              <br />
              today.
            </p>
            {!isMobile && <button className="explore-button">Explore Services</button>}
          </div>
          <div className="image-section">
            <img
              src={section1}
              alt="Office Environment"
              className="image"
            />
          </div>
        </div>
        {isMobile && <div className="mobileButton">
          <button className="explore-button">Explore Services</button>
        </div>}

        <div className="container reverse-layout">
          <div className="text-section2">
            <h1>Why Choose Us? </h1>
            <p>
              We deliver tailored IT solutions with
              <br />
              cutting-edge technology and industry
              <br />
              expertise. Trusted by businesses
              <br />
              worldwide, our focus is your success,
              <br />
              every step of the way.
            </p>
            <button className="discover-button">Discover the difference</button>
          </div>
          <div className="image-section2">
            <img
              src={section2}
              alt="Discover"
              className="image2"
            />
          </div>
        </div>



        {/*sec-3*/}
        <div className="newsletter-container">
          <h2 className="newsletter-title">What’s new?</h2>
          <div className="newsletter-card" id="card-1" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
            <h3 className="card-title">
              Ratna Mace IT Solutions Launches New AI-
              <br />
              Powered Platform
            </h3>
            <p className="card-content">
              We’re thrilled to announce the launch of our new
              <br />
              AI-powered platform designed to enhance
              <br />
              operational efficiency for our clients across
              <br />
              industries. Explore how we’re revolutionizing IT
              <br />
              solutions!
            </p>
            <p className="card-date">November 12, 2024</p>
          </div>

          <div className="newsletter-card" id="card-2" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
            <h3 className="card-title">New AI Tools Released for
              <br />
              Data Analysis</h3>
            <p className="card-content">
              Discover how our new suite of AI tools can help businesses optimize
              <br />
              their data analysis processes for better decision making.
              <br />
              These tools are designed to make complex analysis easy,
              <br />
              providing actionable insights quickly. Leverage the
              <br />
              power of AI to stay ahead in the competitive landscape.
            </p>
            <p className="card-date">November 10, 2024</p>
          </div>

          <div className="newsletter-card" id="card-3" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
            <h3 className="card-title">Breaking: IT Solutions Achieve
              <br />
              Milestone</h3>
            <p className="card-content">
              Ratna Mace IT Solutions celebrates its milestone of serving 1000+
              <br />
              clients worldwide. A big thank you to our customers for their trust!
              <br />
              This achievement reflects the hard work and dedication
              <br />
              of our team, and we're just getting started.
              <br />
              Here's to even greater milestones ahead!
            </p>
            <p className="card-date">November 8, 2024</p>
          </div>

          <div className="newsletter-card" id="card-4" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
            <h3 className="card-title">Introducing Enhanced Cybersecurity
              <br />
              Features</h3>
            <p className="card-content">
              Our platform now includes enhanced cybersecurity features to ensure
              <br />
              your data remains protected from emerging threats.
              <br />
              With the increasing number of cyber attacks, this is a
              <br />
              vital update to keep your operations safe and secure.
              <br />
              Stay ahead of the curve with our top-notch cybersecurity solutions.

            </p>
            <p className="card-date">November 7, 2024</p>
          </div>

          <div className="newsletter-card" id="card-5" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
            <h3 className="card-title">Cloud Integration Now Available
              <br />
              for Clients</h3>
            <p className="card-content">
              We're excited to offer cloud integration for all of our services,
              <br />
              making it easier for businesses to scale their operations.
              <br />
              Whether you're looking to reduce infrastructure costs or
              <br />
              improve operational efficiency, our cloud solutions
              <br />
              provide the flexibility and scalability you need
            </p>
            <p className="card-date">November 5, 2024</p>
          </div>

          <div className="newsletter-card" id="card-6" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
            <h3 className="card-title">AI-driven Insights for Better
              <br />
              Decision Making</h3>
            <p className="card-content">
              Leverage AI-driven insights to make faster, data-driven decisions in
              <br />
              your organization. With the help of advanced algorithms,  
              <br />
              you can turn raw data into actionable strategies.
              <br />
              Enhance your decision-making process and stay competitive
              <br />
              by adopting AI-powered analytics.
            </p>
            <p className="card-date">November 3, 2024</p>
          </div>


          <div className="carousel-container">
            {[...Array(6)].map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`dot ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></div>
                {index < 5 && <div className="divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <button className="subscribe-button">Subscribe to newsletter</button>
        </div>






        <div className="join-team-container">
          {/* Heading Section */}
          <h1 className="join-heading">JOIN OUR TEAM OF INNOVATORS!</h1>

          {/* Content Section: Flexbox layout */}
          <div className="content-section">
            {/* Text Section */}
            <div className="text-section4">
              <p>
                We are looking for
                <br />
                talented individuals who
                <br />
                are passionate about
                <br />
                technology and ready to
                <br />
                make an impact.
                <br />
                Discover exciting career
                <br />
                opportunities and grow
                <br />
                with us.
              </p>
            </div>

            {/* Image Section */}
            <div className="image-section4">
              <img
                src={section4}
                alt="Innovation and teamwork"
                className="image4"
              />
            </div>
          </div>

          {/* Learn More Button */}
          <div className="button-container">
            <button className="learn-more-button">Learn more</button>
          </div>
        </div>
      



    </>
  );
};

export default Homepage;

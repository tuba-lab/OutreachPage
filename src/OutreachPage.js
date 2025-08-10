import React, { useState, useEffect } from 'react';

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    { label: "On Going Research Projects", key: "ongoing-research-projects", href: "#" },
    { label: "Completed Research Projects", key: "completed-research-projects", href: "#" },
    { label: "Joint Project", key: "joint-project", href: "#" },
    { label: "Important Laboratories", key: "important-laboratories", href: "/laboratories" },
    { label: "Departmental Committees", key: "departmental-committees", href: "#" },
    { label: "Alumni Relations", key: "alumni-relations", href: "/alumni-relations" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap to a new line on small screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">Home</a>
          <a href="/about" className="amu-nav-link">About</a>
          <a href="/programs" className="amu-nav-link">Programs</a>
          <a href="/faculty" className="amu-nav-link">Faculty</a>
          <a href="/contact" className="amu-nav-link">Contact</a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid; /* Changed to use CSS Grid */
          grid-template-columns: 1fr 1fr; /* Two columns for desktop */
          gap: 20px;
          align-items: center;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            grid-template-columns: 1fr; /* Single column on small screens */
            justify-items: center; /* Center items horizontally */
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};


const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">
        {children}
      </main>
      <Footer />
    </>
  );
};

const OutreachPage = () => {
  return (
    <div className="outreach-container">
      <style>{`
        /* --- STYLES FOR THE OUTREACH PAGE CONTENT --- */
        .outreach-container {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          min-height: 400px;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #004d40;
          margin-bottom: 2rem;
          text-align: center;
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 3rem;
          text-align: justify;
        }

        .outreach-section {
          margin-bottom: 3rem;
        }

        .outreach-section-title {
          font-size: 2rem;
          font-weight: 600;
          color: #00796b;
          border-bottom: 2px solid #e0f2f1;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        .outreach-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
          text-align: justify;
        }
        
        .outreach-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .outreach-list-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1rem;
          color: #333;
          margin-bottom: 15px;
          background-color: #f1f8e9;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .outreach-list-item::before {
          content: '•';
          color: #004d40;
          font-size: 1.5rem;
          line-height: 1;
        }

        .outreach-image {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 3rem auto 0 auto; /* Center the image and add top margin */
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

      `}</style>
      <h1 className="page-title">Outreach</h1>
      <img 
        src="https://api.amu.ac.in/storage/images/editor/22639/1634391781_22639.jpg"
        alt="AMU Outreach Event" 
        className="outreach-image"
      />
      <p className="intro-text">
        The Department of Computer Science at Aligarh Muslim University is deeply committed to community engagement and outreach. Our initiatives are designed to bridge the gap between academia and the public, promoting digital literacy, fostering innovation, and contributing to the social and technological development of the region. Through various programs and partnerships, we aim to share our knowledge, resources, and expertise beyond the university campus.
      </p>
      
      <div className="outreach-section">
        <h2 className="outreach-section-title">Community Workshops</h2>
        <p className="outreach-text">
          We regularly organize free workshops and training sessions for students, professionals, and the general public on a wide range of topics, including basic computer skills, coding for beginners, cybersecurity awareness, and emerging technologies like AI and machine learning. These workshops are a cornerstone of our outreach efforts, providing valuable skills that empower individuals and local businesses.
        </p>
      </div>

      <div className="outreach-section">
        <h2 className="outreach-section-title">School & College Programs</h2>
        <p className="outreach-text">
          Our department actively collaborates with local schools and colleges to inspire the next generation of technologists. We host interactive sessions, coding competitions, and mentorship programs to encourage young minds to explore computer science. These programs are tailored to different age groups and educational levels, making technology accessible and engaging for all.
        </p>
      </div>

      <div className="outreach-section">
        <h2 className="outreach-section-title">Public Lectures & Seminars</h2>
        <p className="outreach-text">
          We host a series of public lectures and seminars featuring distinguished speakers from academia and industry. These events are open to the entire community and cover cutting-edge topics, providing a platform for intellectual exchange and knowledge sharing.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <OutreachPage />
    </Layout>
  );
};

export default App;

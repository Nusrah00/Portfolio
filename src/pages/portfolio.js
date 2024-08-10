import React from "react";
import "../styles/portfolio.css";
import profile_images from "../assets/profile_images.png";
import shielded from "../assets/shielded.png";
import design from "../assets/design.png";
import github_logo from "../assets/github_logo.jpg";
import linkedin_logo from "../assets/linkedin_logo.png";
import phone_logo from "../assets/phone_logo.png";
import x_logo from "../assets/x_logo.jpg";
import mail_logo from "../assets/mail_logo.png";

function Portfolio() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav class="navbar">
        <ul>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#skills">Skills and Expertise</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#Training">Training and Certification</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Introduction */}
      <div id="intro" class="intro">
        <table>
          <tr>
            <td>
              <img src={profile_images} class="profile_image" alt="profile" />
            </td>
            <td>
              {" "}
              <h1>Nasrah Moshood</h1>
              <h4>
                <em>
                  <b>A Budding Software Developer</b>
                </em>
              </h4>
              <p>
                Nasrah Moshood is a chartered accountant and a self-driven
                budding front-end developer with a passion for creating
                engaging, user-centric web experiences. She has a proven ability
                to translate design concepts into functional features,
                collaborate effectively within cross-functional teams, and
                quickly learn new technologies. Experience in educational
                technology, cybersecurity awareness, and product development.
                Dedicated to continuous learning and growth in the tech
                industry, with a strong interest in volunteering and
                contributing to community-driven projects
              </p>
            </td>{" "}
          </tr>
        </table>
        <hr />
      </div>

      {/* Skills and Expertise */}
      <div id="skills" class="skills">
        <h2>Skills and Expertise</h2>
        <ul>
          <li>
            Software & Tools
            <ul>
              <li>
                Building Proficiency in HTML, CSS, JavaScript, Bootstrap and
                React. WordPress and Microsoft Office (Excel, Word and
                PowerPoint).
              </li>
            </ul>
          </li>
          <li>
            Soft Skills
            <ul>
              <li>Strong problem-solving</li>
              <li>Analytical thinking</li>
              <li>Excellent communication (Written andVerbal)</li>
              <li>Adaptability </li>
              <li>Teamwork</li>
            </ul>
          </li>
        </ul>
        <hr />
      </div>

      {/* projects */}
      <div id="projects">
        <h2>Project</h2>
        <div class="projects-navigation">
          <div id="project_one" class="projects-container">
            <div class="projects right">
              <a
                href="https://shield-ed.vercel.app"
                title="Go to ShieldEd Web App"
                target="_self"
              >
                ShieldEd
              </a>
              <img src={shielded} alt="" />
              <p>
                A gamified web app featuring interactive and engaging elements
                designed to educate and engage both consumers and businesses in
                learning about cybersecurity measures <br /> and online safety,
                helping to protect them from potential threats. <br />
                Built in collaboration with a cross-functional team, this app
                leverages HTML, CSS, and React.
              </p>
            </div>
            <div id="project_two" class="projects right">
              <a
                href="https://shield-ed.vercel.app"
                title="Go to Dummy App"
                target="_self"
              >
                Dummy App
              </a>
              <img src={design} alt="Icon Two" />
              <p>
                Another description here. This one also features interactive
                elements and is designed to engage users in various activities.{" "}
                <br />
                Built with different technologies and focuses on different
                aspects of user engagement.
              </p>
            </div>
          </div>
          {/* <a href="#project_three" title="Next Page" class="nav-arrow next">&gt;</a>  */}
        </div>
        <div class="projects-navigation">
          {/* <a href="#project_two" title="Previous Page" class="nav-arrow prev">&lt;</a> */}
          <div class="projects-container">
            <div class="projects right">
              <a
                href="https://shield-ed.vercel.app"
                title="Go to ShieldEd Web App"
                target="_self"
              >
                ShieldEd
              </a>
              <img src={design} alt="" width="20vw" height="30vw" />
              <p>
                A gamified web app featuring interactive and engaging elements
                designed to educate and engage both consumers and businesses in
                learning about cybersecurity measures <br /> and online safety,
                helping to protect them from potential threats. <br />
                Built in collaboration with a cross-functional team, this app
                leverages HTML, CSS, and React.
              </p>
            </div>
            <div class="projects right">
              <a
                href="https://shield-ed.vercel.app"
                title="Go to Dummy App"
                target="_self"
              >
                Dummy App
              </a>
              <img src={design} alt="Another Icon" width="20vw" height="30vw" />
              <p>
                Another description here. This one also features interactive
                elements and is designed to engage users in various activities.{" "}
                <br />
                Built with different technologies and focuses on different
                aspects of user engagement.
              </p>
            </div>
          </div>
          {/* <a href="#" title="Next Page" class="nav-arrow next">&gt;</a> */}
        </div>
        <hr></hr>
      </div>

      {/* Professional Experience */}
      <div id="professional">
        <h2>Professional Experience</h2>
        <h5>
          BigFix Technology<em>Junior Developer Intern</em>{" "}
        </h5>{" "}
        <p>Apr 2019–Jul 2019 | Lagos, Nigeria </p>
        <ul>
          <li>
            - Acquired new technical skills and knowledge in web development and
            database management.
          </li>
          <li>
            - Recreated an existing website using HTML, CSS, and Bootstrap,
            solidifying understanding of front-end development principles.
          </li>
          <li>
            - Gained hands-on experience with WordPress while assisting in the
            management of client websites, gaining familiarity with content
            management systems and their customization options. Contributed to
            the development of an accounting application, gaining valuable
            exposure to PHP and MySQL database integration broadening
            understanding of full-stack web development.
          </li>
          <li>
            {" "}
            Demonstrated a strong aptitude for learning new technologies and
            adapting to project requirements.
          </li>
        </ul>
        <hr></hr>
      </div>

      {/* Education */}
      <div id="education">
        <h2>Education</h2>
        <strong>
          BSc Accounting University of Lagos <em>2015-2020 </em>
        </strong>
        <hr></hr>
      </div>

      {/* Training/Certification */}

      <div id="training">
        <h3>Training and Certificate</h3>
        <ul>
          <li>
            Technology For Development (Tech4Dev) — Software Development
            (Frontend) (Oct 2023 to present)
          </li>
          <li>
            Udemy-The App Brewery, The Complete Web Development Course (Nov 2023
            to present).
          </li>
          <li>
            Intermediate Python — DataCamp (2022), Understanding Data — DataCamp
            (2022)
          </li>
          <li>
            Frontend Developer — GirlCode Academy, Tech Soft Skills Training —
            Jobberman (2020).
          </li>
        </ul>
        <hr></hr>
      </div>

      {/* Contact */}
      <h2>Contact</h2>
      <footer className="footer">
        <a
          href="mailto:your-email@example.com"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mail_logo} alt="Email" className="social-logo" />
        </a>
        <a
          href="tel:+1234567890"
          title="Phone Number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={phone_logo} alt="Phone Number" className="social-logo" />
        </a>
        <a
          href="https://github.com/yourprofile"
          title="Github Repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_logo} alt="Github Repo" className="social-logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          title="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin_logo}
            alt="LinkedIn Profile"
            className="social-logo"
          />
        </a>
        <a
          href="https://x.com/yourprofile"
          title="X Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x_logo} alt="X Profile" className="social-logo" />
        </a>
      </footer>
    </div>
  );
}

export default Portfolio;

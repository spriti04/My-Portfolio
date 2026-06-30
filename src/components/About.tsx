import {FaUserTie, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
function About() {
    return (
        <section id="about">
            {/* <h2>About Me</h2> */}

            <div className="about-container">

                {/* Left Side */}
                <div className="about-text">
                    <h2 className="section-title">
                        <FaUserTie className="title-icon" />
                        About Me
                    </h2>
                    <p>
                        I am a passionate Java Full Stack Developer with strong knowledge of Java, Spring Boot, MySQL, React.js, and RESTful APIs. 
                        I enjoy building scalable, secure, and user-friendly web applications that solve real-world problems. 
                        Through academic projects and continuous learning, I have developed skills in both backend and frontend development, database design, and software engineering best practices. 
                        I am eager to contribute to innovative projects, expand my technical expertise, and grow as a software developer in a dynamic environment.
                    </p>

                    <a href="/my_resume.pdf" download>
                        <button className="resume-btn">
                            Download Resume
                        </button>
                    </a>
                </div>

                {/* Right Side Cards */}
                <div className="about-cards">
                    <div className="card">
                        <FaGraduationCap className="card-icon" />
                        <h3>Education</h3>
                        <p>
                            <span>Masters of Computer Applications</span> <br /> <br />
                            <span>2024 - 2026</span>
                        </p>
                        {/* <p>Masters of Computer Applications</p>
                        <p>2024 - 2026</p> */}
                    </div>

                    <div className="card">
                        <FaBriefcase className="card-icon" />
                        <h3>Experience</h3>
                        <p>Fresher</p>
                        <p> Actively seeking oppotunities</p>
                    </div>

                    <div className="card">
                        <FaMapMarkerAlt className="card-icon" />
                        <h3>📍Location</h3>
                        <p>Odisha, India</p>
                    </div>

                    <div className="card">
                        <FaEnvelope className="card-icon" />
                        <h3>✉ Email</h3>
                        <p>pritimayeen3@gmail.com</p>
                    </div>
                </div>

            </div>
            
        </section>
    );
}

export default About;
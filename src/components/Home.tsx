import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";

function Home() {
    return (
        <section className="home">
            <div className="home-content">

                <div className="home-text">
                    <h4>Hello, I'm</h4>

                    <h1>Pritimayee Nayak</h1>

                    <h3>Java Full Stack Devevloper</h3>

                    <p>
                        I build secure, scalable, and efficient web applications
                        using Java, Spring Boot, and modern technologies.
                    </p>

                    <div className="home-buttons">
                        <a href="#projects">
                            <button>View Projects</button>
                        </a>
                        <a href="#contact">
                            <button>Contact Me</button>
                        </a>
                    </div>

                    <div className="social-icons">
                        <a href="https://github.com/spriti04" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/pritimayee-nayak-741b68371/" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>

                        <a href="mailto:pritimayeen3@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="home-image">
                    <img src={profile}
                        alt="Profile" />
                </div>
            </div>
        </section>
    );
}

export default Home;
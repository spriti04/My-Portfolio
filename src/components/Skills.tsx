import {FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript,
         SiTypescript, SiHibernate, SiJsonwebtokens, SiTailwindcss} from "react-icons/si";

function Skills () {
    const skills = [
        {name: "Java", icon: <FaJava color="#f89820" />},
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "Spring Security", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "JWT", icon: <SiJsonwebtokens color="#8B5CF6"/> },
        { name: "Hibernate", icon: <SiHibernate color="#59666C" /> },
        { name: "REST API", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "MySQL", icon: <SiMysql color="#00758F"  /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#181717" /> }
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        <div className="skill-icon">
                            {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
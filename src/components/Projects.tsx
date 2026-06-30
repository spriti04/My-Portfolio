import { FaShoppingCart, FaTasks, FaChartLine, FaGithub } from "react-icons/fa";

function Projects () {
    const projects = [
        {
            title: "Slay with Style",
            icon: <FaShoppingCart color="#FBBF24"/>,
            description: "E-commerce backend built using Spring Boot, Spring Security and MySQL.",
            tech: ["Java", "Spring Security", "React"],
            features: [
                "User Authentication",
                "Shopping Cart",
                "Order Management",
            ],
            github: "https://github.com/spriti04/SlayWithStyle",
        },
        {
            title: "Todo Application",
            icon: <FaTasks color="#34D399"/>,
            description: "Task management application with authentication and CRUD operations.",
            tech: ["Java", "Spring Security", "MySQL"],
            features: [
                "User Authentication",
                "CRUD Operation",
                "Task Management",
            ],
            github: "https://github.com/spriti04/todo",
        },
        {
            title: "Trading System",
            icon: <FaChartLine color="#072ef4" />,
            description: "Platform for buying & selling stock with wallet management.",
            tech: ["Java", "Spring Security", "MySQL"],
            features: [
                "User Authentication",
                "Buying / Selling Stock",
                "Wallet Maintainance",
            ],
            github: "https://github.com/spriti04/EazyByts-Module2",
        },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="project-header">
                            <span className="project-icon">
                                {project.icon}
                            </span>
                            <h3> {project.title} </h3>
                        </div>

                        <p>{project.description}</p>

                        <ul className="project-features">
                            {project.features.map((feature) => (
                                <li key={feature}>✔ {feature}</li>
                            ))}
                        </ul>

                        <div className="tech-stack">
                            {project.tech.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>

                        <div className="project-buttons">
                            <a href={project.github}
                               target="_blank"
                               rel="noopener noreferrer"
                            > <FaGithub /> GitHub </a>
                        </div>
                    </div>
                ))}
                
            </div>

        </section>
    );
}

export default Projects;
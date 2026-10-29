import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../hooks/useDarkMode";

interface SidebarProps {
    github: string;
    linkedin: string;
    photography: string;
}

export function Sidebar({ github, linkedin, photography }: SidebarProps) {
    const { darkModeActive } = useDarkMode();

    return (
        <aside className="sidebar" aria-label="Redes">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img
                    className="sidebar-img"
                    src={darkModeActive ? "assets/github-copilot-branco.png" : "assets/github-icon-novo.svg"}
                    alt=""
                />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={photography} target="_blank" rel="noopener noreferrer" aria-label="Fotografia">
                <FontAwesomeIcon icon={faCamera} />
            </a>
        </aside>
    );
}

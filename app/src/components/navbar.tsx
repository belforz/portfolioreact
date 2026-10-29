import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../hooks/useDarkMode";

const links = [
    { href: "#sobre", label: "sobre" },
    { href: "#experiencia", label: "experiência" },
    { href: "#projetos", label: "projetos" },
    { href: "#skills", label: "skills" },
    { href: "#formacao", label: "formação" },
    { href: "#contato", label: "contato" },
];

export function NavBar() {
    const { darkModeActive, toggleDarkMode } = useDarkMode();
    const Icon = darkModeActive ? MoonIcon : SunIcon;
    const label = darkModeActive ? "Modo escuro ativo. Mudar para claro" : "Modo claro ativo. Mudar para escuro";

    return (
        <header className="header">
            <div className="container header-inner">
                <nav className="nav" aria-label="Seções">
                    {links.map((link) => (
                        <a key={link.href} href={link.href}>{link.label}</a>
                    ))}
                </nav>
                <button type="button" className="theme-toggle" onClick={toggleDarkMode} aria-label={label} title={label}>
                    <Icon width={18} height={18} />
                </button>
            </div>
        </header>
    );
}
